[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
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
            return string.join("\n", "<PhysicsBody> {",
                string.join("", tab(z+1), "bodyType:", bodyType.to_string()),
                string.join("", tab(z+1), "mass:", mass.to_string()),
                string.join("", tab(z+1), "allowSleep:", allowSleep.to_string()),
                string.join("", tab(z+1), "awake:", awake.to_string()),
                string.join("", tab(z+1), "sensor:", sensor.to_string()),
                string.join("", tab(z+1), "density:", density.to_string()),
                string.join("", tab(z+1), "friction:", friction.to_string()),
                string.join("", tab(z+1), "restitution:", restitution.to_string()),
                string.join("", tab(z), "}"))
