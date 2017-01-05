[indent=4]
/**
 * load overlap2d project.dt
 */
namespace Overlap2D
    /**
     *
     */
    class CompositeVO
        // prop sImages: list of SimpleImageVO
        prop sImage9patchs: list of Image9patchVO
        // prop sTextBox: list of TextBoxVO
        prop sLabels: list of LabelVO
        // prop sComposites: list of CompositeItemVO
        // prop sSelectBoxes: list of SelectBoxVO
        // prop sParticleEffects: list of ParticleEffectVO
        // prop sLights: list of LightVO
        // prop sSpineAnimations: list of SpineVO
        // prop sSpriteAnimations: list of SpriteAnimationVO
        // prop sSpriterAnimations: list of SpriterVO
        // prop sColorPrimitives: list of ColorPrimitiveVO
        prop layers: list of LayerItemVO

        construct(json: Json.Object)
            sImage9patchs = new list of Image9patchVO
            sLabels = new list of LabelVO
            layers = new list of LayerItemVO
            load(json)

        /**
         * deserialize properites from json
         */
        def load(json: Json.Object)

            /* load patch9 imahes*/
            if json.has_member("sImage9patchs")
                var imagesJson = json.get_array_member("sImage9patchs")
                for var imageJson in imagesJson.get_elements() 
                    sImage9patchs.add(new Image9patchVO(imageJson.get_object()))

            /* load sprite labels */
            if json.has_member("sLabels")
                var labelsJson = json.get_array_member("sLabels")
                for var labelJson in labelsJson.get_elements() 
                    sLabels.add(new LabelVO(labelJson.get_object()))

            /* load display layers */
            if json.has_member("layers")
                var layersJson = json.get_array_member("layers")
                for var layerJson in layersJson.get_elements() 
                    layers.add(new LayerItemVO(layerJson.get_object()))

        /**
         * to_string with indentation
         */
        def to_string(z:int=0) : string
            var sb1 = new StringBuilder()
            if sImage9patchs.size > 0
                for var obj1 in sImage9patchs
                    sb1.append(obj1.to_string(z+1))

            var sb2 = new StringBuilder()
            if sLabels.size > 0
                for var obj2 in sLabels
                    sb2.append(obj2.to_string(z+1))

            var sb3 = new StringBuilder()
            if layers.size > 0
                for var obj3 in layers
                    sb3.append(obj3.to_string(z+1))
        
            return string.join("\n", "<Composite> {",
                string.join("", tab(z+1), "sImage9patchs:", sb1.str),
                string.join("", tab(z+1), "sLabels:", sb2.str),
                string.join("", tab(z+1), "layers:", sb3.str),
                string.join("", tab(z), "}"))


