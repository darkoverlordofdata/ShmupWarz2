[indent=4]
/**
 * Physics Properties
 */
namespace Overlap2D.Data
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
            return toString(this, z)
