[indent=4]
/**
 * Patch9 Image
 */
namespace Overlap2D.Data
    /**
     *
     */
    class SimpleImageVO : MainItemVO
        prop imageName: string
        prop isRepeat: bool
        prop isPolygon: bool
        construct(json: Json.Object)
            super(json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)        
