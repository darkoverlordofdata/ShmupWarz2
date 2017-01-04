[indent=4]
/**
 * Screen Resolution
 */
namespace Overlap2D
    /**
     *
     */
    class Resolution : Object
        prop name: string
        prop width: double
        prop height: double
        construct(json: Json.Object)
            load(json)

        /**
         * load properites from json
         */
        def load(json: Json.Object)
            if json.has_member("name")
                name = json.get_string_member("name")

            if json.has_member("width")
                width = (double)json.get_double_member("width")

            if json.has_member("height")
                height = (double)json.get_double_member("height")
        
        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Resolution> {",
                string.join("", tab(z+1), "name:", name),
                string.join("", tab(z+1), "width:", width.to_string()),
                string.join("", tab(z+1), "height:", height.to_string()),
                string.join("", tab(z), "}"))
        
