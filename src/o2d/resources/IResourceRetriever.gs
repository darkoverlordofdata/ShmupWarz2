[indent=4]
/**
 * IResourceRetriever.gs
 *
 * 
 *
 */
uses Gee
uses Bosco
uses sdx
uses sdx.math
uses o2d.data

namespace o2d.resources

    interface IResourceRetriever : Object
        def abstract getSpriteAnimation(name: string): TextureAtlas
        def abstract getSceneVO(sceneName: string): SceneVO 
        def abstract getProjectVO(): ProjectInfoVO 
        def abstract getLoadedResolution(): ResolutionEntryVO

