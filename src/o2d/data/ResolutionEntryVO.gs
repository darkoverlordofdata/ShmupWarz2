/**
 * Screen Resolution
 */
[indent=4]
namespace o2d.data
    /**
     *
     */
    class ResolutionEntryVO : Object
        prop name: string
        prop width: int
        prop height: int
        prop base: int

        construct(json: Json.Object)
            parseIt(this, json)

        /**
         * getMultiplier
         */
        def getMultiplier(originalResolution: ResolutionEntryVO?): double
            mul: double

            if base == 0
                mul = (double)(originalResolution.width/width)
            else
                mul = (double)(originalResolution.height/height)

            return mul


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)        
