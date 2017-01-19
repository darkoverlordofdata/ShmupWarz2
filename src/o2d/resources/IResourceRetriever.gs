/**
 * IResourceRetriever.gs
 *
 * 
 *
 */
[indent=4]
uses Gee
uses sdx
uses sdx.math
uses sdx.graphics.s2d
uses o2d.data

namespace o2d.resources

    interface IResourceRetriever : Object
        def abstract getTextureRegion(name: string): TextureRegion
        def abstract getSpriteAnimation(name: string): TextureAtlas
        def abstract getSceneVO(sceneName: string): SceneVO 
        def abstract getProjectVO(): ProjectInfoVO 
        def abstract getLoadedResolution(): ResolutionEntryVO

