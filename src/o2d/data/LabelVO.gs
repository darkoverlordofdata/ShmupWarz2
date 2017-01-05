[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class LabelVO : MainItemVO
        prop text: string
        prop style: string
        prop size: int
        prop align: int
        prop height: double
        prop width: double
        prop multiline: bool

        construct(json: Json.Object)
            super(json)
            load(json)

        /**
         * deserialize properites from json
         */
        def load(json: Json.Object)
            super.load(json)

            if json.has_member("text")
                text = json.get_string_member("text")

            if json.has_member("style")
                style = json.get_string_member("style")
            
            if json.has_member("size")
                size = (int)json.get_int_member("size")

            if json.has_member("align")    
                align = (int)json.get_int_member("align")

            if json.has_member("height")    
                height = (double)json.get_double_member("height")

            if json.has_member("width")    
                width = (double)json.get_double_member("width")

            if json.has_member("multiline")    
                multiline = (bool)json.get_boolean_member("multiline")

        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Label> {",
                to_string_helper(z),
                string.join("", tab(z+1), "text:", text),
                string.join("", tab(z+1), "style:", style),
                string.join("", tab(z+1), "size:", size.to_string()),
                string.join("", tab(z+1), "align:", align.to_string()),
                string.join("", tab(z+1), "height:", height.to_string()),
                string.join("", tab(z+1), "width:", width.to_string()),
                string.join("", tab(z), "}"))

