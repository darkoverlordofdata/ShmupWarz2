/**
 * load overlap2d project.dt
 */
[indent=4]
namespace o2d.data
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
            