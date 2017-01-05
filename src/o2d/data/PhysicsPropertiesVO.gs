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
            parseIt(this, json)


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

