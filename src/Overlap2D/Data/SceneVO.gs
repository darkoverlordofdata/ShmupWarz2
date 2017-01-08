[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D.Data
    /**
     *
     */
    class SceneVO : Object
        prop sceneName: string
        prop composite : CompositeVO?
        prop lightSystemEnabled: bool
        prop ambientColor: array of double
        prop physicsPropertiesVO: PhysicsPropertiesVO?
        prop verticalGuides : list of double?
        prop horizontalGuides : list of double?

        construct(json: Json.Object)
            ambientColor = {1, 1, 1, 1}
            verticalGuides = new list of double?
            horizontalGuides = new list of double?
            parseIt(this, json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)
