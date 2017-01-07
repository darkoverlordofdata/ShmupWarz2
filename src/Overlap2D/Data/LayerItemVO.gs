[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D.Data
    /**
     *
     */
    class LayerItemVO : Object
        prop layerName: string
        prop isVisible: bool
        prop isLocked: bool
        construct(json: Json.Object)
            parseIt(this, json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)
