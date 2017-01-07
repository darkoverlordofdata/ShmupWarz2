[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D.Data
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
            parseIt(this, json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)


        def to_string_helper(z:int=0) : string
            return string.join("\n", 
                string.join("", tab(z+1), "tags:[", string.joinv(",",tags), "]"),
                string.join("", tab(z+1), "itemName:", itemName),
                string.join("", tab(z+1), "height:", height.to_string()),
                string.join("", tab(z+1), "width:", width.to_string()),
                string.join("", tab(z+1), "originX:", originX.to_string()),
                string.join("", tab(z+1), "originY:", originY.to_string()),
                string.join("", tab(z+1), "zIndex:", zIndex.to_string()),
                string.join("", tab(z+1), "layerName:", layerName),
                string.join("", tab(z+1), "shape:", shape == null ? "{}" : "\n"+shape.to_string(z+1)),
                string.join("", tab(z+1), "physics:", physics == null ? "{}" : "\n"+physics.to_string(z+1)),
                string.join("", tab(z+1), "composite:", composite == null ? "{}" : "\n"+composite.to_string(z+1))
                )

