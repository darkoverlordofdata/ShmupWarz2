[indent=4]
/**
 * Patch9 Image
 */
namespace Overlap2D
    /**
     *
     */
    class CompositeItemVO : MainItemVO
        prop width: double
        prop height: double
        construct(json: Json.Object)
            super(json)
            // parseIt(this, json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<CompositeItem> {",
                to_string_helper(z),
                string.join("", tab(z+1), "height:", height.to_string()),
                string.join("", tab(z+1), "width:", width.to_string()),
                string.join("", tab(z), "}"))
        
