[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D.Data
    /**
     *
     */
    class abstract MainItemVO : Object
        prop uniqueId: int
        prop itemName: string
        prop tags: array of string
        prop x: double
        prop y: double
        prop originX: double
        prop originY: double
        prop zIndex: int
        prop layerName: string
        prop composite: CompositeVO?
        prop shape: ShapeVO?
        prop physics: PhysicsBodyDataVO?
        prop height: double
        prop width: double
        construct(json: Json.Object)
            parseIt(this, json)


        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)


