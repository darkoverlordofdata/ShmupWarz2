/**
 * load overlap2d project.dt
 */
[indent=4]
uses Gee

namespace o2d.data
    /**
     *  polygons array
     * for now, not used
     */
        
    class ShapeVO : Object
        prop polygons: list of ArrayList of PointVO

        construct(json: Json.Object)
            polygons = new list of ArrayList of PointVO
            parseIt(this, json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)

