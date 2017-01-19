/**
 * Patch9 Image
 */
[indent=4]
namespace o2d.data
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
        
