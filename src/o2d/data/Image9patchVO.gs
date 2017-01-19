/**
 * Patch9 Image
 */
[indent=4]
namespace o2d.data
    /**
     *
     */
    class Image9patchVO : MainItemVO
        prop imageName: string
        prop width: double
        prop height: double
        construct(json: Json.Object)
            super(json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)        
