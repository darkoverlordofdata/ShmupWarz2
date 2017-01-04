[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class LibraryItem : Object
        prop itemName: string
        prop tags: array of string
        prop originX: double
        prop originY: double
        prop zIndex: double
        prop layerName: string
        prop composite: Composite?
        prop shape: Shape?
        prop physics: Physics?
        prop height: double
        prop width: double
        construct(name: string, json: Json.Object)
            itemName = name
            load(json)

        /**
         * load properites from json
         */
        def load(json: Json.Object)
            if json.has_member("originX")
                originX = (double)json.get_double_member("originX")

            if json.has_member("originY")    
                originY = (double)json.get_double_member("originY")

            if json.has_member("zIndex")
                zIndex = (double)json.get_double_member("zIndex")

            if json.has_member("layerName")
                layerName = json.get_string_member("layerName")

            if json.has_member("composite")
                composite = new Composite(json.get_object_member("composite"))

            if json.has_member("shape")
                shape = new Shape(json.get_object_member("shape"))
            
            if json.has_member("physics")
                physics = new Physics(json.get_object_member("physics"))

            if json.has_member("height")
                height = (double)json.get_double_member("height")

            if json.has_member("width")    
                width = (double)json.get_double_member("width")

        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<LibraryItem> {",
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
                string.join("", tab(z+1), "composite:", composite == null ? "{}" : composite.to_string(z+1)),
                string.join("", tab(z), "}"))
