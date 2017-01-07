[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D.Data
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
            return toString(this, z)
            