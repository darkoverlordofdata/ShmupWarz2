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
            parseIt(this, json)


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

