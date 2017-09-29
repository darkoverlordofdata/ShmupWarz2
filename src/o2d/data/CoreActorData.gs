/**
 * CoreActorData.gs
 *
 * 
 *
 */
[indent=4]
uses Gee
uses sdx
uses sdx.math
uses o2d.utils

namespace o2d.data

    class CoreActorData : Object
        prop id: string
        prop tags: list of string
        prop layerIndex: int
        prop customVars: CustomVariables

