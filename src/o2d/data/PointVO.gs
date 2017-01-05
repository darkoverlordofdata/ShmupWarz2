[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class PointVO : Object
        prop x: double
        prop y: double
        construct(json: Json.Object)
            parseIt(this, json)

        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Point> {",
                string.join("", tab(z+1), "x:", x.to_string()),
                string.join("", tab(z+1), "y:", y.to_string()),
                string.join("", tab(z), "}"))
