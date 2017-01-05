[indent=4]
/**
 * Patch9 Image
 */
namespace Overlap2D
    /**
     *
     */
    class Image9patchVO : MainItemVO
        prop imageName: string
        prop width: double
        prop height: double
        construct(json: Json.Object)
            super(json)
            load(json)

        /**
         * deserialize properites from json
         */
        def load(json: Json.Object)
            super.load(json)

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
                to_string_helper(z),
                string.join("", tab(z+1), "imageName:", imageName),
                string.join("", tab(z+1), "height:", height.to_string()),
                string.join("", tab(z+1), "width:", width.to_string()),
                string.join("", tab(z), "}"))
        
