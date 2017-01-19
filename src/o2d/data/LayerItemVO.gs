/**
 * load overlap2d project.dt
 */
[indent=4]
namespace o2d.data
    /**
     *
     */
    class LayerItemVO : Object
        prop layerName: string
        prop isVisible: bool
        prop isLocked: bool
        construct(json: Json.Object?=null)
            if json != null do parseIt(this, json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)

        def static createDefault(name:string="Default"): LayerItemVO
            var layerItemVO = new LayerItemVO()
            layerItemVO.layerName = name
            layerItemVO.isVisible = true
            return layerItemVO
        