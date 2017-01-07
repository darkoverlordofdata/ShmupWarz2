[indent=4]
uses Gee
uses Overlap2D.Data
namespace Overlap2D
    /**
     * Parse Values Aspect
     *
     * parse the json node, deserializeing to the it
     *
     * @param it the explicit this Object
     * @param json the json node being parsed
     *
     */
    def parseIt(it: Object, json: Json.Object)

        if it isa CompositeItemVO do ParseIt.CompositeItemVO((CompositeItemVO)it, json)
        if it isa CompositeVO do ParseIt.CompositeVO((CompositeVO)it, json)
        if it isa Image9patchVO do ParseIt.Image9patchVO((Image9patchVO)it, json)
        if it isa LabelVO do ParseIt.LabelVO((LabelVO)it, json)
        if it isa LayerItemVO do ParseIt.LayerItemVO((LayerItemVO)it, json)
        if it isa MainItemVO do ParseIt.MainItemVO((MainItemVO)it, json)
        if it isa PhysicsBodyDataVO do ParseIt.PhysicsBodyDataVO((PhysicsBodyDataVO)it, json)
        if it isa PhysicsPropertiesVO do ParseIt.PhysicsPropertiesVO((PhysicsPropertiesVO)it, json)
        if it isa PointVO do ParseIt.PointVO((PointVO)it, json)
        if it isa ProjectInfoVO do ParseIt.ProjectInfoVO((ProjectInfoVO)it, json)
        if it isa ResolutionEntryVO do ParseIt.ResolutionEntryVO((ResolutionEntryVO)it, json)
        if it isa SceneVO do ParseIt.SceneVO((SceneVO)it, json)
        if it isa ShapeVO do ParseIt.ShapeVO((ShapeVO)it, json)
            
    class ParseIt

        def static CompositeItemVO(it: CompositeItemVO, json: Json.Object)
            //print "parseCompositeItemVO"
            if json.has_member("height")
                it.height = (double)json.get_double_member("height")

            if json.has_member("width")
                it.width = (double)json.get_double_member("width")
                
        
        def static CompositeVO(it: CompositeVO, json: Json.Object)    
            //print "parseCompositeVO"
            if json.has_member("sImage9patchs")
                var imagesJson = json.get_array_member("sImage9patchs")
                for var imageJson in imagesJson.get_elements() 
                    it.sImage9patchs.add(new Data.Image9patchVO(imageJson.get_object()))

            if json.has_member("sLabels")
                var labelsJson = json.get_array_member("sLabels")
                for var labelJson in labelsJson.get_elements() 
                    it.sLabels.add(new Data.LabelVO(labelJson.get_object()))

            if json.has_member("layers")
                var layersJson = json.get_array_member("layers")
                for var layerJson in layersJson.get_elements() 
                    it.layers.add(new Data.LayerItemVO(layerJson.get_object()))
                
        
        def static Image9patchVO(it: Image9patchVO, json: Json.Object)  
            //print "parseImage9patchVO" 
            if json.has_member("imageName")
                it.imageName = json.get_string_member("imageName")

            if json.has_member("height")
                it.height = (double)json.get_double_member("height")

            if json.has_member("width")
                it.width = (double)json.get_double_member("width")
                
        
        def static LabelVO(it: LabelVO, json: Json.Object)    
            //print "parseLabelVO"
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

                
        
        def static LayerItemVO(it: LayerItemVO, json: Json.Object)    
            //print "parseLayerItemVO"
            if json.has_member("layerName")
                it.layerName = json.get_string_member("layerName")

            if json.has_member("isVisible")
                it.isLocked = (bool)json.get_boolean_member("isVisible")

            if json.has_member("isLocked")
                it.isLocked = (bool)json.get_boolean_member("isLocked")
                
        
        def static MainItemVO(it: MainItemVO, json: Json.Object)  
            //print "parseMainItemVO"  
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
                it.composite = new Data.CompositeVO(json.get_object_member("composite"))

            if json.has_member("shape")
                it.shape = new Data.ShapeVO(json.get_object_member("shape"))
            
            if json.has_member("physics")
                it.physics = new Data.PhysicsBodyDataVO(json.get_object_member("physics"))

            if json.has_member("height")
                it.height = (double)json.get_double_member("height")

            if json.has_member("width")    
                it.width = (double)json.get_double_member("width")

                
        
        def static PhysicsBodyDataVO(it: PhysicsBodyDataVO, json: Json.Object)  
            //print "parsePhysicsBodyDataVO"  
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

                
        
        def static PhysicsPropertiesVO(it: PhysicsPropertiesVO, json: Json.Object)    
            //print "parsePhysicsPropertiesVO"
            if json.has_member("gravityX")
                it.gravityX = (double)json.get_double_member("gravityX")

            if json.has_member("gravityY")
                it.gravityY = (double)json.get_double_member("gravityY")

            if json.has_member("sleepVelocity")
                it.sleepVelocity = (double)json.get_double_member("sleepVelocity")

            if json.has_member("enabled")
                it.enabled = (bool)json.get_int_member("enabled")
                
        
        def static PointVO(it: PointVO, json: Json.Object)    
            if json.has_member("x")
                it.x = (double)json.get_double_member("x")

            if json.has_member("y")
                it.y = (double)json.get_double_member("y")
                
        
        def static ProjectInfoVO(it: ProjectInfoVO, json: Json.Object)   
            //print "parseProjectInfoVO" 
            if json.has_member("pixelToWorld")
                it.pixelToWorld = (int)json.get_int_member("pixelToWorld")

            if json.has_member("originalResolution")    
                it.originalResolution = new Data.ResolutionEntryVO(json.get_object_member("originalResolution"))

            var scenesJson = json.get_array_member("scenes")
            for var sceneJson in scenesJson.get_elements() 
                it.scenes.add(new Data.SceneVO(sceneJson.get_object()))
                
            var itemsJson = json.get_object_member("libraryItems")
            for var itemKey in itemsJson.get_members()
                var item = new Data.CompositeItemVO(itemsJson.get_object_member(itemKey))
                it.libraryItems[item.itemName] = item
                
        
        def static ResolutionEntryVO(it: ResolutionEntryVO, json: Json.Object)    
            //print "parseResolutionEntryVO"
            if json.has_member("name")
                it.name = json.get_string_member("name")

            if json.has_member("width")
                it.width = (int)json.get_int_member("width")

            if json.has_member("height")
                it.height = (int)json.get_int_member("height")
                
        
        def static SceneVO(it: SceneVO, json: Json.Object)  
            //print "parseSceneVO"  
            if json.has_member("sceneName")
                it.sceneName = json.get_string_member("sceneName")
                
            if json.has_member("composite")
                it.composite = new Data.CompositeVO(json.get_object_member("composite"))
                
        
        def static ShapeVO(it: ShapeVO, json: Json.Object)    
            //print "parseShapeVO"
            if json.has_member("polygons")
                ////print "polygon"
                for var poly in json.get_array_member("polygons").get_elements()
                    var point_array = poly.get_array()
                    var points = new ArrayList of Data.PointVO
                    it.polygons.add(points)
                    for var i = 0 to (point_array.get_length()-1)
                        points.add(new Data.PointVO(point_array.get_object_element(i)))
                
        
