/**
 * CompositeActor.gs
 *
 * 
 *
 */
[indent=4]
uses Gee
uses GLib
uses sdx
uses sdx.math
uses sdx.scenes.scene2d
uses sdx.scenes.scene2d.ui
uses sdx.graphics
uses sdx.graphics.s2d
uses o2d.data
uses o2d.utils
uses o2d.resources

namespace o2d.scene2d


    class CompositeActor : Group
        ir: IResourceRetriever
        pixelsPerWU: double
        resMultiplier: double
        vo: CompositeItemVO
        indexes: dict of int, Actor = new dict of int, Actor
        layerMap: dict of string, LayerItemVO = new dict of string, LayerItemVO

        construct(vo: CompositeItemVO?=null, ir: IResourceRetriever?=null)
            if vo != null do this.builder(vo, ir, new BuiltItemHandler.Default())

        construct builder(vo: CompositeItemVO, ir: IResourceRetriever, itemHandler: BuiltItemHandler, isRoot: bool=true)
            initialize(vo, ir, itemHandler, isRoot)

        def initialize(vo: CompositeItemVO, ir: IResourceRetriever, itemHandler: BuiltItemHandler, isRoot: bool=true)
            this.vo = vo
            this.ir = ir

            pixelsPerWU = ir.getProjectVO().pixelToWorld
            var resolutionEntryVO = ir.getLoadedResolution()
            resMultiplier = resolutionEntryVO.getMultiplier(ir.getProjectVO().originalResolution)
            makeLayerMap(vo)
            build(vo, itemHandler, isRoot)


        def makeLayerMap(vo: CompositeItemVO)
            layerMap.clear()
            layerMap[vo.layerName] = LayerItemVO.createDefault(vo.layerName)
            for layer in vo.composite.layers
                layerMap[layer.layerName] = layer

        def build(vo: CompositeItemVO, itemHandler: BuiltItemHandler, isRoot: bool)
            buildImages(itemHandler, vo.composite.sImages)
            build9PatchImages(itemHandler, vo.composite.sImage9patchs)
            buildLabels(itemHandler, vo.composite.sLabels)
            buildComposites(itemHandler, vo.composite.sComposites)
            processZIndexes()
            recalculateSize()

            if isRoot
                buildCoreData(this, vo)
                itemHandler.onItemBuild(this)
            
        def buildComposites(itemHandler: BuiltItemHandler, composites: list of CompositeItemVO)
            for var composite in composites
                var className = getClassName(composite.customVars)
                actor: CompositeActor
                if className != null
                    try 
                        var type = Type.from_name(className)
                        actor = Object.new(type) as CompositeActor
                        if actor == null
                            actor  = new CompositeActor.builder(composite, ir, itemHandler, false)
                        else
                            actor.initialize(composite, ir, itemHandler)
                    except e: Error
                        actor  = new CompositeActor.builder(composite, ir, itemHandler, false)

                else
                    actor  = new CompositeActor.builder(composite, ir, itemHandler, false)
                
                processMain(actor, composite)
                addActor(actor)

                itemHandler.onItemBuild(actor)

        def getClassName(customVars: string): string
            var cv = new CustomVariables()
            cv.loadFromString(customVars)
            var className = cv.getStringVariable("className")
            if className != null && className == ""
                className = null
            
            return className

        def buildImages(itemHandler: BuiltItemHandler, images: list of SimpleImageVO)
            for var i=0 to (images.size-1)
                var image = new Image.region(ir.getTextureRegion(images[i].imageName))
                processMain(image, images[i])
                addActor(image)
                itemHandler.onItemBuild(image)

        def build9PatchImages(itemHandler: BuiltItemHandler, patches: list of Image9patchVO)
            for patch in patches
                var region = (TextureAtlas.AtlasRegion) ir.getTextureRegion(patch.imageName)
                var ninePatch = new NinePatch(region, region.splits[0], region.splits[1], region.splits[2], region.splits[3])
                var image = new Image.ninepatch(ninePatch)
                image.setWidth(patch.width*pixelsPerWU/resMultiplier)
                image.setHeight(patch.height * pixelsPerWU/resMultiplier)
                processMain(image, patch)
                addActor(image)
                itemHandler.onItemBuild(image)
                                

        def buildLabels(itemHandler: BuiltItemHandler, labels: list of LabelVO)
            for lab in labels
                var style = new Label.LabelStyle(new Font(Sdx.files.resource(lab.style), lab.size), Color.WHITE)
                var label = new Label(lab.text, style)
                label.setAlignment(lab.align)
                label.setWidth(lab.width * pixelsPerWU / resMultiplier)
                label.setHeight(lab.height * pixelsPerWU / resMultiplier)
                processMain(label, lab)
                addActor(label)
                itemHandler.onItemBuild(label)

        def processMain(actor: Actor, composite: MainItemVO)
            // print "===================================="
            // print vo.to_string()
            // print "===================================="
            actor.name = vo.itemIdentifier
            buildCoreData(actor, vo)
            actor.setPosition(vo.x * pixelsPerWU/resMultiplier, vo.y * pixelsPerWU/resMultiplier)
            actor.setOrigin(vo.originX * pixelsPerWU/resMultiplier, vo.originY * pixelsPerWU/resMultiplier)
            actor.setScale(vo.scaleX, vo.scaleY)
            actor.setRotation(vo.rotation)
            actor.color = new Color.rgba(vo.tint[0], vo.tint[1], vo.tint[2], vo.tint[3])

            indexes[getLayerIndex(vo.layerName) + vo.zIndex] = actor
            var zz = layerMap.has_key(vo.layerName)
            if layerMap[vo.layerName].isVisible
                actor.setVisible(true)
            else
                actor.setVisible(false)
            

        def buildCoreData(actor: Actor, vo: MainItemVO)
            cv: CustomVariables = null
            if vo.customVars != null && vo.customVars != ""
                cv = new CustomVariables()
                cv.loadFromString(vo.customVars)
            //core data
            var data = new CoreActorData()
            data.id = vo.itemIdentifier
            data.layerIndex = getLayerIndex(vo.layerName)
            data.tags = vo.tags
            data.customVars = cv
            actor.userObject = (Object)data

        /**
         * TODO: profile
         * this is a port from java
         * is this performant in vala?
         */
        def processZIndexes()
            var indexList = new list of int
            indexList.insert_all(0, indexes.keys)
            // srt:CompareDataFunc of int = def(a, b)
            //     return a-b
            // indexList.sort(srt)
            indexList.sort()
            var indexArray = indexList.slice(0, indexList.size).to_array()
            for var i = 0 to (indexArray.length-1)
                indexes[indexArray[i]].setZIndex(i)

        def getLayerIndex(name: string): int
            return vo.composite.layers.index_of(layerMap[name])

        def getItem(id:string): Actor
            for var actor in children
                var userObject = actor.userObject
                if userObject != null && userObject isa CoreActorData && id == ((CoreActorData)userObject).id
                    return actor
            return null

        def recalculateSize()
            var lowerX = 0.0
            var lowerY = 0.0
            var upperX = 0.0
            var upperY = 0.0
            var i = -1
            for var value in children
                if (i++) == 0 
                    if value.getScaleX() > 0 && value.getWidth() * value.getScaleX() > 0
                        lowerX = value.getX()
                        upperX = value.getX() + value.getWidth() * value.getScaleX()
                     else 
                        upperX = value.getX()
                        lowerX = value.getX() + value.getWidth() * value.getScaleX()
                    

                    if value.getScaleY() > 0 && value.getHeight() * value.getScaleY() > 0
                        lowerY = value.getY()
                        upperY = value.getY() + value.getHeight() * value.getScaleY()
                     else 
                        upperY = value.getY()
                        lowerY = value.getY() + value.getHeight() * value.getScaleY()
                    
                
                if value.getScaleX() > 0 && value.getWidth() > 0
                    if lowerX > value.getX() do lowerX = value.getX()
                    if upperX < value.getX() + value.getWidth() * value.getScaleX()
                        upperX = value.getX() + value.getWidth() * value.getScaleX()
                 else 
                    if upperX < value.getX() do upperX = value.getX()
                    if lowerX > value.getX() + value.getWidth() * value.getScaleX()
                        lowerX = value.getX() + value.getWidth() * value.getScaleX()
                
                if value.getScaleY() > 0 && value.getHeight() * value.getScaleY() > 0
                    if lowerY > value.getY() do lowerY = value.getY()
                    if upperY < value.getY() + value.getHeight() * value.getScaleY()
                        upperY = value.getY() + value.getHeight() * value.getScaleY()
                 else 
                    if upperY < value.getY() do upperY = value.getY()
                    if lowerY > value.getY() + value.getHeight() * value.getScaleY()
                        lowerY = value.getY() + value.getHeight() * value.getScaleY()
                
            setWidth(upperX)
            setHeight(upperY)

        def setLayerVisibility(layerName: string, isVisible: bool)
            var layerIndex = getLayerIndex(layerName)
            layerMap[layerName].isVisible = isVisible

            for var actor in children
                var userObject = actor.userObject
                if userObject != null && userObject isa CoreActorData && ((CoreActorData)userObject).layerIndex == layerIndex
                    actor.setVisible(isVisible)
            

        def getItemsByTag(tag: string): list of Actor
            var items = new list of Actor
            for var actor in children
                var userObject = actor.userObject
                if userObject != null && userObject isa CoreActorData
                    var data = (CoreActorData) userObject
                    if data.tags != null && data.tags.contains(tag)
                        items.add(actor)
            return items

        def getItemsByLayer(layerName: string): list of Actor
            var layerIndex = getLayerIndex(layerName)
            var items = new list of Actor

            for var actor in children
                var userObject = actor.userObject
                if userObject != null && userObject isa CoreActorData && ((CoreActorData)userObject).layerIndex == layerIndex
                    items.add(actor)
            return items
            
        def act(delta: double)
            pass // no scripting yet
        