[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class Label : Object
        prop tags: array of string
        prop x: double
        prop y: double
        prop originX: double
        prop originY: double
        prop zIndex: double
        prop layerName: string
        prop text: string
        prop style: string
        prop size: double
        prop align: double
        prop height: double
        prop width: double
        construct(json: Json.Object)
            load(json)

        /**
         * load properites from json
         */
        def load(json: Json.Object)
            if json.has_member("x")
                x = (double)json.get_double_member("x")

            if json.has_member("y")
                y = (double)json.get_double_member("y")

            if json.has_member("originX")
                originX = (double)json.get_double_member("originX")

            if json.has_member("originY")      
                originY = (double)json.get_double_member("originY")

            if json.has_member("zIndex")    
                zIndex = (double)json.get_double_member("zIndex")

            if json.has_member("layerName")    
                layerName = json.get_string_member("layerName")

            if json.has_member("text")
                text = json.get_string_member("text")

            if json.has_member("style")
                style = json.get_string_member("style")
            
            if json.has_member("size")
                size = (double)json.get_double_member("size")

            if json.has_member("align")    
                align = (double)json.get_double_member("align")

            if json.has_member("height")    
                height = (double)json.get_double_member("height")

            if json.has_member("width")    
                width = (double)json.get_double_member("width")

        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Label> {",
                string.join("", tab(z+1), "tags:[", string.joinv(",",tags), "]"),
                string.join("", tab(z+1), "x:", x.to_string()),
                string.join("", tab(z+1), "y:", y.to_string()),
                string.join("", tab(z+1), "originX:", originX.to_string()),
                string.join("", tab(z+1), "originY:", originY.to_string()),
                string.join("", tab(z+1), "zIndex:", zIndex.to_string()),
                string.join("", tab(z+1), "layerName:", layerName),
                string.join("", tab(z+1), "text:", text),
                string.join("", tab(z+1), "style:", style),
                string.join("", tab(z+1), "size:", size.to_string()),
                string.join("", tab(z+1), "align:", align.to_string()),
                string.join("", tab(z+1), "height:", height.to_string()),
                string.join("", tab(z+1), "width:", width.to_string()),
                string.join("", tab(z), "}"))

