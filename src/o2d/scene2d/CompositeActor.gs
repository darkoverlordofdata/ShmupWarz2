[indent=4]
/**
 * CompositeActor.gs
 *
 * 
 *
 */
uses Gee
uses sdx
uses sdx.math
uses sdx.scenes.scene2d
uses o2d.data
uses o2d.utils
uses o2d.resources

namespace o2d.scene2d

    class CompositeActor : Group
        ir: IResourceRetriever
        pixelsPerWU: double
        resMultiplier: double
        vo: CompositeItemVO
        indexes: dict of int, Actor
        layerMap: dict of string, LayerItemVO

        construct(vo: CompositeItemVO = null, ir: IResourceRetriever = null)
            if vo != null do initialize(vo, ir, new BuiltItemHandler.Default())

        construct builder(vo: CompositeItemVO, ir: IResourceRetriever, itemHandler: BuiltItemHandler, isRoot: bool=true)
            initialize(vo, ir, new BuiltItemHandler.Default())

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
            for layer in vo.composite.layers
                layerMap[layer.layerName] = layer

        def build(vo: CompositeItemVO, itemHandler: BuiltItemHandler, isRoot: bool)
            // buildImages(vo.composite.sImages, itemHandler)
            // build9PatchImages(vo.composite.sImage9patchs, itemHandler)
            // buildLabels(vo.composite.sLabels, itemHandler)
            // buildComposites(vo.composite.sComposites, itemHandler)
            // processZIndexes()
            // recalculateSize()

            // if isRoot
            //     buildCoreData(this, vo)
            //     itemHandler.onItemBuild(this)
            pass

        def buildComposites(composites: ArrayList, itemHandler: BuiltItemHandler)
            // for composite in composites
            //     var className = getClassName(composite.customVars)
            //     actor: CompositeActor
            //     if className != null
            //         try 
            //             var type = Type.from_name(className)
            //             actor = Object.new(type)
            //             actor.initialize(composite, ir, itemHandler)
            //         except e: Error
            //             actor  = new CompositeActor(composite, ir, itemHandler, false)

            //     else
            //         actor  = new CompositeActor(composite, ir, itemHandler, false)
                
            //     processMain(actor, composite)
            //     addActor(actor)

            //     itemHandler.onItemBuild(actor)
            pass

        def getClassName(customVars: string): string
            var cv = new CustomVariables()
            cv.loadFromString(customVars)
            var className = cv.getStringVariable("className")
            if className != null && className == ""
                className = null
            
            return className


        //def buildImages(images: ArrayList of SimpleImageVO, itemHandler: BuiltItemHandler)
            
