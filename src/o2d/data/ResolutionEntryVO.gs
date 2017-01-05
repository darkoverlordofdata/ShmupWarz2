[indent=4]
/**
 * Screen Resolution
 */
namespace Overlap2D
    /**
     *
     */
    class ResolutionEntryVO : Object
        prop name: string
        prop width: int
        prop height: int
        prop base: int

        construct(json: Json.Object)
            load(json)

        /**
         * getMultiplier
         */
        def getMultiplier(originalResolution: ResolutionEntryVO): double
            mul: double

            if base == 0
                mul = (double)(originalResolution.width/width)
            else
                mul = (double)(originalResolution.height/height)

            return mul

        /**
         * deserialize properites from json
         */
        def load(json: Json.Object)
            if json.has_member("name")
                name = json.get_string_member("name")

            if json.has_member("width")
                width = (int)json.get_int_member("width")

            if json.has_member("height")
                height = (int)json.get_int_member("height")
        
        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Resolution> {",
                string.join("", tab(z+1), "name:", name),
                string.join("", tab(z+1), "width:", width.to_string()),
                string.join("", tab(z+1), "height:", height.to_string()),
                string.join("", tab(z), "}"))
        
