[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D.Data
    /**
     *
     */
    class LabelVO : MainItemVO
        prop text: string
        prop style: string
        prop size: int
        prop align: int
        prop height: double
        prop width: double
        prop multiline: bool

        construct(json: Json.Object)
            super(json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)
