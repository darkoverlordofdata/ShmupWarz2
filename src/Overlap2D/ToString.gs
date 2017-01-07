[indent=4]
uses Gee
uses Overlap2D.Data

namespace Overlap2D
    /**
     * To String Aspect
     *
     * ToString. the json node, deserializeing to the it
     *
     * @param it the explicit this Object
     * @param z the intented tab stop
     *
     */
    def toString (it: Object, z:int=0): string

        if it isa CompositeItemVO do return ToString.CompositeItemVO((CompositeItemVO)it, z)
        if it isa CompositeVO do return ToString.CompositeVO((CompositeVO)it, z)
        if it isa Image9patchVO do return ToString.Image9patchVO((Image9patchVO)it, z)
        if it isa LabelVO do return ToString.LabelVO((LabelVO)it, z)
        if it isa LayerItemVO do return ToString.LayerItemVO((LayerItemVO)it, z)
        if it isa MainItemVO do return ToString.MainItemVO((MainItemVO)it, z)
        if it isa PhysicsBodyDataVO do return ToString.PhysicsBodyDataVO((PhysicsBodyDataVO)it, z)
        if it isa PhysicsPropertiesVO do return ToString.PhysicsPropertiesVO((PhysicsPropertiesVO)it, z)
        if it isa PointVO do return ToString.PointVO((PointVO)it, z)
        if it isa ProjectInfoVO do return ToString.ProjectInfoVO((ProjectInfoVO)it, z)
        if it isa ResolutionEntryVO do return ToString.ResolutionEntryVO((ResolutionEntryVO)it, z)
        if it isa SceneVO do return ToString.SceneVO((SceneVO)it, z)
        if it isa ShapeVO do return ToString.ShapeVO((ShapeVO)it, z)
        return "<Object> {}"

    class ToString
        def static CompositeItemVO(it: CompositeItemVO, z:int=0): string
            return string.join("\n", "<CompositeItem> {",
                it.to_string_helper(z),
                string.join("", tab(z+1), "height:", it.height.to_string()),
                string.join("", tab(z+1), "width:", it.width.to_string()),
                string.join("", tab(z), "}"))

        def static CompositeVO(it: CompositeVO, z:int=0): string
            var sb1 = new StringBuilder()
            if it.sImage9patchs.size > 0
                for var obj1 in it.sImage9patchs
                    sb1.append(obj1.to_string(z+1))

            var sb2 = new StringBuilder()
            if it.sLabels.size > 0
                for var obj2 in it.sLabels
                    sb2.append(obj2.to_string(z+1))

            var sb3 = new StringBuilder()
            if it.layers.size > 0
                for var obj3 in it.layers
                    sb3.append(obj3.to_string(z+1))
        
            return string.join("\n", "<Composite> {",
                string.join("", tab(z+1), "sImage9patchs:", sb1.str),
                string.join("", tab(z+1), "sLabels:", sb2.str),
                string.join("", tab(z+1), "layers:", sb3.str),
                string.join("", tab(z), "}"))


        def static Image9patchVO(it: Image9patchVO, z:int=0): string
            return string.join("\n", "<Image9patch> {",
                it.to_string_helper(z),
                string.join("", tab(z+1), "imageName:", it.imageName),
                string.join("", tab(z+1), "height:", it.height.to_string()),
                string.join("", tab(z+1), "width:", it.width.to_string()),
                string.join("", tab(z), "}"))

        def static LabelVO(it: LabelVO, z:int=0): string
            return string.join("\n", "<Label> {",
                it.to_string_helper(z),
                string.join("", tab(z+1), "text:", it.text),
                string.join("", tab(z+1), "style:", it.style),
                string.join("", tab(z+1), "size:", it.size.to_string()),
                string.join("", tab(z+1), "align:", it.align.to_string()),
                string.join("", tab(z+1), "height:", it.height.to_string()),
                string.join("", tab(z+1), "width:", it.width.to_string()),
                string.join("", tab(z), "}"))

        def static LayerItemVO(it: LayerItemVO, z:int=0): string
            return string.join("\n", "<Layer> {",
                string.join("", tab(z+1), "layerName:", it.layerName),
                string.join("", tab(z+1), "isVisible:", it.isVisible.to_string()),
                string.join("", tab(z), "}"))

        def static MainItemVO(it: MainItemVO, z:int=0): string
            return string.join("\n", "<MainItem> {",
                it.to_string_helper(z),
                string.join("", tab(z), "}"))

        def static PhysicsBodyDataVO(it: PhysicsBodyDataVO, z:int=0): string
            return string.join("\n", "<PhysicsBody> {",
                string.join("", tab(z+1), "bodyType:", it.bodyType.to_string()),
                string.join("", tab(z+1), "mass:", it.mass.to_string()),
                string.join("", tab(z+1), "allowSleep:", it.allowSleep.to_string()),
                string.join("", tab(z+1), "awake:", it.awake.to_string()),
                string.join("", tab(z+1), "sensor:", it.sensor.to_string()),
                string.join("", tab(z+1), "density:", it.density.to_string()),
                string.join("", tab(z+1), "friction:", it.friction.to_string()),
                string.join("", tab(z+1), "restitution:", it.restitution.to_string()),
                string.join("", tab(z), "}"))

        def static PhysicsPropertiesVO(it: PhysicsPropertiesVO, z:int=0): string
            return string.join("\n", "<PhysicsPropertiesVO> {",
                string.join("", tab(z+1), "gravityX:", it.gravityX.to_string()),
                string.join("", tab(z+1), "gravityY:", it.gravityY.to_string()),
                string.join("", tab(z+1), "sleepVelocity:", it.sleepVelocity.to_string()),
                string.join("", tab(z+1), "enabled:", it.enabled.to_string()),
                string.join("", tab(z), "}"))

        def static PointVO(it: PointVO, z:int=0): string
            return string.join("\n", "<Point> {",
                string.join("", tab(z+1), "x:", it.x.to_string()),
                string.join("", tab(z+1), "y:", it.y.to_string()),
                string.join("", tab(z), "}"))

        def static ProjectInfoVO(it: ProjectInfoVO, z:int=0): string
            var sb1 = new StringBuilder()
            sb1.append(string.join("", "\n", tab(z+1), "[\n"))
            for var obj1 in it.scenes
                sb1.append(obj1.to_string(z+1))
                sb1.append(string.join("\n", ",",""))

            sb1.append(string.join("", "\n", tab(z+1), "]\n", tab(z+1)))
            var str1 = sb1.str

            var sb2 = new StringBuilder()
            if it.libraryItems.size > 0
                sb2.append(string.join("", tab(z+1), "["))
                for var obj2 in it.libraryItems.values
                    sb2.append(obj2.to_string(z+1))
                    sb2.append(string.join("", tab(z+1), ", "))
                sb2.append(string.join("", tab(z+1), "]"))
            var str2 = sb2.str

            return string.join("\n", "<Project> {",
                string.join("", tab(z+1), "pixelToWorld:", it.pixelToWorld.to_string()),
                string.join("", tab(z+1), "originalResolution:", it.originalResolution.to_string(z+1)),
                string.join("", tab(z+1), "scenes:", sb1.str),
                string.join("", tab(z+1), "libraryItems:", sb2.str),
                string.join("", tab(z), "}"))

        def static ResolutionEntryVO(it: ResolutionEntryVO, z:int=0): string
            return string.join("\n", "<Resolution> {",
                string.join("", tab(z+1), "name:", it.name),
                string.join("", tab(z+1), "width:", it.width.to_string()),
                string.join("", tab(z+1), "height:", it.height.to_string()),
                string.join("", tab(z), "}"))

        def static SceneVO(it: SceneVO, z:int=0): string
            return string.join("\n", tab(z+1)+"<Scene> {",
                string.join("", tab(z+2), "sceneName:", it.sceneName),
                string.join("", tab(z+1), "}"))

        def static ShapeVO(it: ShapeVO, z:int=0): string
            var sb1 = new StringBuilder()
            if it.polygons.size>0
                for var points in it.polygons
                    for point in points
                        sb1.append(point.to_string(z+1))


            return string.join("\n", tab(z+1)+"<Shape> {",
                string.join("","\t", tab(z+1)+"polygons:", sb1.str),
                string.join("", tab(z+1), "}"))

