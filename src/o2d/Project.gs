[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class Project : Object
        prop pixelToWorld : double
        prop originalResolution : Resolution
        prop scenes: list of Scene 
        prop libraryItems: dict of string, LibraryItem
        prop readonly uri: string
        construct(uri: string, json: Json.Object)
            _uri = uri
            load(json)

        /**
         * load properites from json
         */
        def load(json: Json.Object)
            if json.has_member("pixelToWorld")
                pixelToWorld = (double)json.get_double_member("pixelToWorld")

            if json.has_member("originalResolution")    
                originalResolution = new Resolution(json.get_object_member("originalResolution"))

            var scenesJson = json.get_array_member("scenes")
            scenes = new list of Scene

            for var sceneJson in scenesJson.get_elements() 
                scenes.add(new Scene(sceneJson.get_object()))
                
            var itemsJson = json.get_object_member("libraryItems")
            libraryItems = new dict of string, LibraryItem

            for var itemKey in itemsJson.get_members()
                //print "itemKey %s", itemKey
                var item = new LibraryItem(itemKey, itemsJson.get_object_member(itemKey))
                libraryItems[item.itemName] = item
            
            /* finish loading scenes */
            for var scene in scenes
                loadScene(uri, scene)



        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            var sb1 = new StringBuilder()
            sb1.append(string.join("", tab(z+1), "[\n", tab(z+3)))
            for var obj1 in scenes
                sb1.append(obj1.to_string(z+1))
                sb1.append(string.join("", tab(z+1), ", "))

            sb1.append(string.join("", "\n", tab(z+1), "]\n", tab(z+1)))
            var str1 = sb1.str

            var sb2 = new StringBuilder()
            if libraryItems.size > 0
                sb2.append(string.join("", tab(z+1), "["))
                for var obj2 in libraryItems.values
                    sb2.append(obj2.to_string(z+1))
                    sb2.append(string.join("", tab(z+1), ", "))
                sb2.append(string.join("", tab(z+1), "]"))
            var str2 = sb2.str

            return string.join("\n", "<Project> {",
                string.join("", tab(z+1), "pixelToWorld:", pixelToWorld.to_string()),
                string.join("", tab(z+1), "originalResolution:", originalResolution.to_string(z+1)),
                string.join("", tab(z+1), "scenes:", sb1.str),
                string.join("", tab(z+1), "libraryItems:", sb2.str),
                string.join("", tab(z), "}"))

