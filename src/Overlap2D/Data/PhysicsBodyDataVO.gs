[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D.Data
    /**
     *
     */
    class PhysicsBodyDataVO : Object
        prop bodyType: int
        prop mass: double
        prop allowSleep: bool
        prop awake: bool
        prop sensor: bool
        prop density: double
        prop friction: double
        prop restitution: double
        construct(json: Json.Object)
            parseIt(this, json)



        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)
