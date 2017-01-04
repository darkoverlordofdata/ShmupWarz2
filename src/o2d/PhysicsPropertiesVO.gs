[indent=4]
/**
 * Physics Properties
 */
namespace Overlap2D
    /**
     *
     */
    class PhysicsPropertiesVO : Object
        prop gravityX: double
        prop gravityY: double
        prop sleepVelocity: double
        prop enabled: bool
        construct(json: Json.Object)
            load(json)

        /**
         * load properites from json
         */
        def load(json: Json.Object)
            if json.has_member("gravityX")
                gravityX = (double)json.get_double_member("gravityX")

            if json.has_member("gravityY")
                gravityY = (double)json.get_double_member("gravityY")

            if json.has_member("sleepVelocity")
                sleepVelocity = (double)json.get_double_member("sleepVelocity")

            if json.has_member("enabled")
                enabled = (bool)json.get_int_member("enabled")

        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<PhysicsPropertiesVO> {",
                string.join("", tab(z+1), "gravityX:", gravityX.to_string()),
                string.join("", tab(z+1), "gravityY:", gravityY.to_string()),
                string.join("", tab(z+1), "sleepVelocity:", sleepVelocity.to_string()),
                string.join("", tab(z+1), "enabled:", enabled.to_string()),
                string.join("", tab(z), "}"))

