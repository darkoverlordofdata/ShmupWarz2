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
        
    class Shape : Object
        prop polygons: list of ArrayList of Point

        construct(json: Json.Object)
            polygons = new list of ArrayList of Point
            load(json)

        /**
         * load properites from json
         */
        def load(json: Json.Object)
            if json.has_member("polygons")
                //print "polygon"
                for var poly in json.get_array_member("polygons").get_elements()
                    var point_array = poly.get_array()
                    //print "point %d", (int)point_array.get_length()
                    var points = new ArrayList of Point
                    polygons.add(points)
                    for var i = 0 to (point_array.get_length()-1)
                        points.add(new Point(point_array.get_object_element(i)))

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


