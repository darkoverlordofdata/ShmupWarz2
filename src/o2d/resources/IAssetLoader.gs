[indent=4]
/**
 * IAssetLoader.gs
 *
 * 
 *
 */
uses Gee
uses sdx
uses sdx.math
uses sdx.graphics.s2d
uses o2d.data

namespace o2d.resources

    interface IAssetLoader : Object
        def abstract loadAtlasPack()
        def abstract loadParticleEffects()
        def abstract loadSpriteAnimations()
        def abstract loadSpineAnimations()
        def abstract loadFonts()
        def abstract loadShaders()
        def abstract loadSpriterAnimations()

