/**
 * load overlap2d project.dt
 */
[indent=4]
namespace o2d.data
    /**
     *
     */
    class CompositeVO : Object
        prop sImages: list of SimpleImageVO
        prop sImage9patchs: list of Image9patchVO
        // prop sTextBox: list of TextBoxVO
        prop sLabels: list of LabelVO
        prop sComposites: list of CompositeItemVO
        // prop sSelectBoxes: list of SelectBoxVO
        // prop sParticleEffects: list of ParticleEffectVO
        // prop sLights: list of LightVO
        // prop sSpineAnimations: list of SpineVO
        // prop sSpriteAnimations: list of SpriteAnimationVO
        // prop sSpriterAnimations: list of SpriterVO
        // prop sColorPrimitives: list of ColorPrimitiveVO
        prop layers: list of LayerItemVO

        construct(json: Json.Object)
            sImages = new list of SimpleImageVO
            sImage9patchs = new list of Image9patchVO
            sLabels = new list of LabelVO
            sComposites = new list of CompositeItemVO
            layers = new list of LayerItemVO
            parseIt(this, json)
            
        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            return toString(this, z)


