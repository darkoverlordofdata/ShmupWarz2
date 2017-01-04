[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class Physics : Object
        prop bodyType: int
        prop mass: double
        prop allowSleep: bool
        prop awake: bool
        prop sensor: bool
        prop density: double
        prop friction: double
        prop restitution: double
        construct(json: Json.Object)
            load(json)

        /**
         * load properites from json
         */
        def load(json: Json.Object)
            if json.has_member("bodyType")
                bodyType = (int)json.get_int_member("bodyType")

            if json.has_member("mass")
                mass = (double)json.get_double_member("mass")

            if json.has_member("allowSleep")
                allowSleep = (bool)json.get_boolean_member("allowSleep")

            if json.has_member("awake")
                allowSleep = (bool)json.get_boolean_member("awake")

            if json.has_member("sensor")
                allowSleep = (bool)json.get_boolean_member("sensor")

            if json.has_member("density")
                density = (double)json.get_double_member("density")

            if json.has_member("friction")
                friction = (double)json.get_double_member("friction")

            if json.has_member("restitution")
                restitution = (double)json.get_double_member("restitution")


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Physics> {",
                string.join("", tab(z+1), "bodyType:", bodyType.to_string()),
                string.join("", tab(z+1), "mass:", mass.to_string()),
                string.join("", tab(z+1), "allowSleep:", allowSleep.to_string()),
                string.join("", tab(z+1), "awake:", awake.to_string()),
                string.join("", tab(z+1), "sensor:", sensor.to_string()),
                string.join("", tab(z+1), "density:", density.to_string()),
                string.join("", tab(z+1), "friction:", friction.to_string()),
                string.join("", tab(z+1), "restitution:", restitution.to_string()),
                string.join("", tab(z), "}"))
