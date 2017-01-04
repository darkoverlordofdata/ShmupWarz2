[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class Scene : Object
        prop sceneName: string
        prop physicsPropertiesVO: PhysicsPropertiesVO?
        prop verticalGuides : Object
        prop horizontalGuides : Object
        prop composite : Composite?

        construct(json: Json.Object)
            if json.has_member("sceneName")
                sceneName = json.get_string_member("sceneName")
                
            if json.has_member("composite")
                composite = new Composite(json.get_object_member("composite"))


        /**
         * load properites from json
         */
        def load(json: Json.Object)
            pass
            //print "continue loading %s", sceneName



        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return string.join("\n", "<Scene> {",
                string.join("", tab(z+1), "sceneName:", sceneName),
                string.join("", tab(z), "}"))

