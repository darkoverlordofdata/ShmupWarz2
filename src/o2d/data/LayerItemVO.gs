[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class LayerItemVO : Object
        prop layerName: string
        prop isVisible: bool
        prop isLocked: bool
        construct(json: Json.Object)
            parseIt(this, json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Layer> {",
                string.join("", tab(z+1), "layerName:", layerName),
                string.join("", tab(z+1), "isVisible:", isVisible.to_string()),
                string.join("", tab(z), "}"))
