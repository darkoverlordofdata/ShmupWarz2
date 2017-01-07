[indent=4]
/**
 * Patch9 Image
 */
namespace Overlap2D.Data
    /**
     *
     */
    class CompositeItemVO : MainItemVO
        prop width: double
        prop height: double
        construct(json: Json.Object)
            super(json)
            // parseIt(this, json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)
        
