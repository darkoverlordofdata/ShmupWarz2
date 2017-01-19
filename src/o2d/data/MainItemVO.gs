/**
 * load overlap2d project.dt
 */
[indent=4]
namespace o2d.data
    /**
     *
     */
    class abstract MainItemVO : Object
        prop uniqueId: int
        prop itemIdentifier: string
        prop itemName: string
        prop tags: list of string = new list of string
        prop customVars: string
        prop x: double
        prop y: double
        prop scaleX: double = 1.0f
        prop scaleY: double = 1.0f
        prop originX: double
        prop originY: double
        prop rotation: double
        prop zIndex: int
        prop layerName: string
        prop tint: array of double = {1, 1, 1, 1}
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


