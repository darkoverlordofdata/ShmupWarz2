[indent=4]
/**
 * load overlap2d project.dt
 */
uses Gee

namespace Overlap2D
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
            var sb1 = new StringBuilder()
            if polygons.size>0
                for var points in polygons
                    for point in points
                        sb1.append(point.to_string(z+1))


            return string.join("\n", "<Shape> {",
                string.join("","\t", "polygons:", sb1.str),
                string.join("", tab(z), "}"))


