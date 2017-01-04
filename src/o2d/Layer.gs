[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class Layer : Object
        prop layerName: string
        prop isVisible: bool
        prop isLocked: bool
        construct(json: Json.Object)
            load(json)

        /**
         * load properites from json
         */
        def load(json: Json.Object)
            if json.has_member("layerName")
                layerName = json.get_string_member("layerName")
            // is the layer visible?
            if json.has_member("isVisible")
                isLocked = (bool)json.get_boolean_member("isVisible")
            // if the layer is locked, it cannot be changed
            if json.has_member("isLocked")
                isLocked = (bool)json.get_boolean_member("isLocked")


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Layer> {",
                string.join("", tab(z+1), "layerName:", layerName),
                string.join("", tab(z+1), "isVisible:", isVisible.to_string()),
                string.join("", tab(z), "}"))
