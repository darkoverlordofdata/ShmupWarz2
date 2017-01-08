[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D.Data
    /**
     *
     */
    class ProjectInfoVO : Object
        prop pixelToWorld : int
        prop originalResolution : ResolutionEntryVO
        prop resolutions: list of ResolutionEntryVO
        prop scenes: list of SceneVO 
        prop libraryItems: dict of string, CompositeItemVO

        construct(json: Json.Object)
            resolutions = new list of ResolutionEntryVO
            scenes = new list of SceneVO
            libraryItems = new dict of string, CompositeItemVO
            parseIt(this, json)


        /**
         * getResolution
         */
        def getResolution(name: string): ResolutionEntryVO
            for resolution in resolutions
                if resolution.name == name
                    return resolution
            return null

            
        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)
            