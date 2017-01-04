[indent=4]
/**
 * Patch9 Image
 */
namespace Overlap2D
    /**
     *
     */
    class Image9patch : Object
        prop tags: array of string
        prop originX: double
        prop originY: double
        prop layerName: string
        prop imageName: string
        prop width: double
        prop height: double
        construct(json: Json.Object)
            load(json)

        /**
         * load properites from json
         */
        def load(json: Json.Object)
            if json.has_member("originX")
                originX = (double)json.get_double_member("originX")

            if json.has_member("originY")
                originY = (double)json.get_double_member("originY")

            if json.has_member("layerName")
                layerName = json.get_string_member("layerName")

            if json.has_member("imageName")
                imageName = json.get_string_member("imageName")

            if json.has_member("height")
                height = (double)json.get_double_member("height")

            if json.has_member("width")
                width = (double)json.get_double_member("width")

        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Image9patch> {",
                string.join("", tab(z+1), "tags:[", string.joinv(",", tags), "]"),
                string.join("", tab(z+1), "originX:", originX.to_string()),
                string.join("", tab(z+1), "originY:", originY.to_string()),
                string.join("", tab(z+1), "layerName:", layerName),
                string.join("", tab(z+1), "imageName:", imageName),
                string.join("", tab(z+1), "height:", height.to_string()),
                string.join("", tab(z+1), "width:", width.to_string()),
                string.join("", tab(z), "}"))
        
