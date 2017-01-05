[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class ProjectInfoVO : Object
        prop pixelToWorld : int
        prop originalResolution : ResolutionEntryVO
        prop resolutions: list of ResolutionEntryVO
        prop scenes: list of SceneVO 
        prop libraryItems: dict of string, CompositeItemVO
        prop readonly uri: string

        construct(uri: string, json: Json.Object)

            resolutions = new list of ResolutionEntryVO
            scenes = new list of SceneVO
            libraryItems = new dict of string, CompositeItemVO
            _uri = uri
            parseIt(this, json)


        /**
         * getResolution
         */
        def getResolution(name: string): ResolutionEntryVO
            for resolution in resolutions
                if resolution.name == name
                    return resolution
            return null

            
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

