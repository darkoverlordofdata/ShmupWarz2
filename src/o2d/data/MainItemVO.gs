[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class MainItemVO : Object
        prop itemName: string
        prop tags: array of string
        prop x: double
        prop y: double
        prop originX: double
        prop originY: double
        prop zIndex: int
        prop layerName: string
        prop composite: CompositeVO?
        prop shape: ShapeVO?
        prop physics: PhysicsBodyDataVO?
        prop height: double
        prop width: double
        construct(json: Json.Object)
            load(json)

        /**
         * deserialize properites from json
         */
        def load(json: Json.Object)
            if json.has_member("x")
                x = (double)json.get_double_member("x")

            if json.has_member("y")
                y = (double)json.get_double_member("y")

            if json.has_member("originX")
                originX = (double)json.get_double_member("originX")

            if json.has_member("originY")    
                originY = (double)json.get_double_member("originY")

            if json.has_member("zIndex")
                zIndex = (int)json.get_int_member("zIndex")

            if json.has_member("layerName")
                layerName = json.get_string_member("layerName")

            if json.has_member("composite")
                composite = new CompositeVO(json.get_object_member("composite"))

            if json.has_member("shape")
                shape = new ShapeVO(json.get_object_member("shape"))
            
            if json.has_member("physics")
                physics = new PhysicsBodyDataVO(json.get_object_member("physics"))

            if json.has_member("height")
                height = (double)json.get_double_member("height")

            if json.has_member("width")    
                width = (double)json.get_double_member("width")

        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<MainItem> {",
                to_string_helper(z),
                string.join("", tab(z), "}"))


        def to_string_helper(z:int=0) : string
            return string.join(
                string.join("", tab(z+1), "tags:[", string.joinv(",",tags), "]"),
                string.join("", tab(z+1), "itemName:", itemName),
                string.join("", tab(z+1), "height:", height.to_string()),
                string.join("", tab(z+1), "width:", width.to_string()),
                string.join("", tab(z+1), "originX:", originX.to_string()),
                string.join("", tab(z+1), "originY:", originY.to_string()),
                string.join("", tab(z+1), "zIndex:", zIndex.to_string()),
                string.join("", tab(z+1), "layerName:", layerName),
                string.join("", tab(z+1), "shape:", shape == null ? "{}" : shape.to_string(z+1)),
                string.join("", tab(z+1), "physics:", physics == null ? "{}" : physics.to_string(z+1)),
                string.join("", tab(z+1), "composite:", composite == null ? "{}" : composite.to_string(z+1))
                )

