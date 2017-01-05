[indent=4]
uses Gee
namespace Overlap2D
/**
 * Parse Values Aspect
 *
 *
 *
 */

    def parseIt(target: Object, json: Json.Object)

        if target isa CompositeItemVO do parseCompositeItemVO((CompositeItemVO)target, json)
        if target isa CompositeVO do parseCompositeVO((CompositeVO)target, json)
        if target isa Image9patchVO do parseImage9patchVO((Image9patchVO)target, json)
        if target isa LabelVO do parseLabelVO((LabelVO)target, json)
        if target isa LayerItemVO do parseLayerItemVO((LayerItemVO)target, json)
        if target isa MainItemVO do parseMainItemVO((MainItemVO)target, json)
        if target isa PhysicsBodyDataVO do parsePhysicsBodyDataVO((PhysicsBodyDataVO)target, json)
        if target isa PhysicsPropertiesVO do parsePhysicsPropertiesVO((PhysicsPropertiesVO)target, json)
        if target isa PointVO do parsePointVO((PointVO)target, json)
        if target isa ProjectInfoVO do parseProjectInfoVO((ProjectInfoVO)target, json)
        if target isa ResolutionEntryVO do parseResolutionEntryVO((ResolutionEntryVO)target, json)
        if target isa SceneVO do parseSceneVO((SceneVO)target, json)
        if target isa ShapeVO do parseShapeVO((ShapeVO)target, json)
            
    
    def parseCompositeItemVO(it: CompositeItemVO, json: Json.Object)
        if json.has_member("height")
            it.height = (double)json.get_double_member("height")
        if json.has_member("width")
            it.width = (double)json.get_double_member("width")
            
    
    def parseCompositeVO(it: CompositeVO, json: Json.Object)    
        if json.has_member("sImage9patchs")
            var imagesJson = json.get_array_member("sImage9patchs")
            for var imageJson in imagesJson.get_elements() 
                it.sImage9patchs.add(new Image9patchVO(imageJson.get_object()))

        if json.has_member("sLabels")
            var labelsJson = json.get_array_member("sLabels")
            for var labelJson in labelsJson.get_elements() 
                it.sLabels.add(new LabelVO(labelJson.get_object()))

        if json.has_member("layers")
            var layersJson = json.get_array_member("layers")
            for var layerJson in layersJson.get_elements() 
                it.layers.add(new LayerItemVO(layerJson.get_object()))
            
    
    def parseImage9patchVO(it: Image9patchVO, json: Json.Object)    
        if json.has_member("imageName")
            it.imageName = json.get_string_member("imageName")

        if json.has_member("height")
            it.height = (double)json.get_double_member("height")

        if json.has_member("width")
            it.width = (double)json.get_double_member("width")
            
    
    def parseLabelVO(it: LabelVO, json: Json.Object)    
        if json.has_member("text")
            it.text = json.get_string_member("text")

        if json.has_member("style")
            it.style = json.get_string_member("style")
        
        if json.has_member("size")
            it.size = (int)json.get_int_member("size")

        if json.has_member("align")    
            it.align = (int)json.get_int_member("align")

        if json.has_member("height")    
            it.height = (double)json.get_double_member("height")

        if json.has_member("width")    
            it.width = (double)json.get_double_member("width")

        if json.has_member("multiline")    
            it.multiline = (bool)json.get_boolean_member("multiline")

            
    
    def parseLayerItemVO(it: LayerItemVO, json: Json.Object)    
        if json.has_member("layerName")
            it.layerName = json.get_string_member("layerName")
        // is the layer visible?
        if json.has_member("isVisible")
            it.isLocked = (bool)json.get_boolean_member("isVisible")
        // if the layer is locked, it cannot be changed
        if json.has_member("isLocked")
            it.isLocked = (bool)json.get_boolean_member("isLocked")
            
    
    def parseMainItemVO(it: MainItemVO, json: Json.Object)    
        if json.has_member("x")
            it.x = (double)json.get_double_member("x")

        if json.has_member("y")
            it.y = (double)json.get_double_member("y")

        if json.has_member("originX")
            it.originX = (double)json.get_double_member("originX")

        if json.has_member("originY")    
            it.originY = (double)json.get_double_member("originY")

        if json.has_member("zIndex")
            it.zIndex = (int)json.get_int_member("zIndex")

        if json.has_member("layerName")
            it.layerName = json.get_string_member("layerName")

        if json.has_member("composite")
            it.composite = new CompositeVO(json.get_object_member("composite"))

        if json.has_member("shape")
            it.shape = new ShapeVO(json.get_object_member("shape"))
        
        if json.has_member("physics")
            it.physics = new PhysicsBodyDataVO(json.get_object_member("physics"))

        if json.has_member("height")
            it.height = (double)json.get_double_member("height")

        if json.has_member("width")    
            it.width = (double)json.get_double_member("width")

            
    
    def parsePhysicsBodyDataVO(it: PhysicsBodyDataVO, json: Json.Object)    
        if json.has_member("bodyType")
            it.bodyType = (int)json.get_int_member("bodyType")

        if json.has_member("mass")
            it.mass = (double)json.get_double_member("mass")

        if json.has_member("allowSleep")
            it.allowSleep = (bool)json.get_boolean_member("allowSleep")

        if json.has_member("awake")
            it.allowSleep = (bool)json.get_boolean_member("awake")

        if json.has_member("sensor")
            it.allowSleep = (bool)json.get_boolean_member("sensor")

        if json.has_member("density")
            it.density = (double)json.get_double_member("density")

        if json.has_member("friction")
            it.friction = (double)json.get_double_member("friction")

        if json.has_member("restitution")
            it.restitution = (double)json.get_double_member("restitution")

            
    
    def parsePhysicsPropertiesVO(it: PhysicsPropertiesVO, json: Json.Object)    
        if json.has_member("gravityX")
            it.gravityX = (double)json.get_double_member("gravityX")

        if json.has_member("gravityY")
            it.gravityY = (double)json.get_double_member("gravityY")

        if json.has_member("sleepVelocity")
            it.sleepVelocity = (double)json.get_double_member("sleepVelocity")

        if json.has_member("enabled")
            it.enabled = (bool)json.get_int_member("enabled")
            
    
    def parsePointVO(it: PointVO, json: Json.Object)    
        if json.has_member("x")
            it.x = (double)json.get_double_member("x")

        if json.has_member("y")
            it.y = (double)json.get_double_member("y")
            
    
    def parseProjectInfoVO(it: ProjectInfoVO, json: Json.Object)    
        if json.has_member("pixelToWorld")
            it.pixelToWorld = (int)json.get_int_member("pixelToWorld")

        if json.has_member("originalResolution")    
            it.originalResolution = new ResolutionEntryVO(json.get_object_member("originalResolution"))

        var scenesJson = json.get_array_member("scenes")
        for var sceneJson in scenesJson.get_elements() 
            it.scenes.add(new SceneVO(sceneJson.get_object()))
            
        var itemsJson = json.get_object_member("libraryItems")
        for var itemKey in itemsJson.get_members()
            //print "itemKey %s", itemKey
            var item = new CompositeItemVO(itemsJson.get_object_member(itemKey))
            it.libraryItems[item.itemName] = item
            
    
    def parseResolutionEntryVO(it: ResolutionEntryVO, json: Json.Object)    
        if json.has_member("name")
            it.name = json.get_string_member("name")

        if json.has_member("width")
            it.width = (int)json.get_int_member("width")

        if json.has_member("height")
            it.height = (int)json.get_int_member("height")
            
    
    def parseSceneVO(it: SceneVO, json: Json.Object)    
        if json.has_member("sceneName")
            it.sceneName = json.get_string_member("sceneName")
            
        if json.has_member("composite")
            it.composite = new CompositeVO(json.get_object_member("composite"))
            
    
    def parseShapeVO(it: ShapeVO, json: Json.Object)    
        if json.has_member("polygons")
            //print "polygon"
            for var poly in json.get_array_member("polygons").get_elements()
                var point_array = poly.get_array()
                //print "point %d", (int)point_array.get_length()
                var points = new ArrayList of PointVO
                it.polygons.add(points)
                for var i = 0 to (point_array.get_length()-1)
                    points.add(new PointVO(point_array.get_object_element(i)))
            
    
