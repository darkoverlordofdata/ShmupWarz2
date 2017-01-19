/**
 * Physics Properties
 */
[indent=4]
namespace o2d.data
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
