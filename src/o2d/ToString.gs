[indent=4]
uses Gee
uses o2d.data

namespace o2d
    /**
     * To String 
     *
     * parse the json node, serializeing the target 'it'
     *
     * @param it the explicit this Object
     * @param z the indented tab stop level
     *
     */
    def private toString (it: Object, z:int=0): string

        // dispatch by type
        if it isa CompositeItemVO do return ToString.CompositeItemVO((CompositeItemVO)it, z)
        if it isa CompositeVO do return ToString.CompositeVO((CompositeVO)it, z)
        if it isa Image9patchVO do return ToString.Image9patchVO((Image9patchVO)it, z)
        if it isa LabelVO do return ToString.LabelVO((LabelVO)it, z)
        if it isa LayerItemVO do return ToString.LayerItemVO((LayerItemVO)it, z)
        if it isa PhysicsBodyDataVO do return ToString.PhysicsBodyDataVO((PhysicsBodyDataVO)it, z)
        if it isa PhysicsPropertiesVO do return ToString.PhysicsPropertiesVO((PhysicsPropertiesVO)it, z)
        if it isa PointVO do return ToString.PointVO((PointVO)it, z)
        if it isa ProjectInfoVO do return ToString.ProjectInfoVO((ProjectInfoVO)it, z)
        if it isa ResolutionEntryVO do return ToString.ResolutionEntryVO((ResolutionEntryVO)it, z)
        if it isa SceneVO do return ToString.SceneVO((SceneVO)it, z)
        if it isa ShapeVO do return ToString.ShapeVO((ShapeVO)it, z)
        if it isa SimpleImageVO do return ToString.SimpleImageVO((SimpleImageVO)it, z)
        return "<Object> {}"

    /**
     * ToString helper class
     */
    class private ToString : Object
        /**
         * helper - double_array_to_string 
         *
         */
        def static double_array_to_string(d: array of double): string
            var str = new array of string[d.length]
            for var i=0 to (d.length-1)
                str[i] = d[i].to_string()
            return string.joinv(", ", str)

        /**
        * tab x n
        * usage: obj.to_string(x+1)
        */
        def static tab(n:int):string
            var sb = new StringBuilder()
            for var i=1 to n do sb.append("  ")
            return sb.str


        /**
         *  CompositeItemVO extends MainItemVO
         *
         * width: double
         * height: double
         */
        def static CompositeItemVO(it: CompositeItemVO, z:int=0): string
            //print "to_string: CompositeItemVO"
            return string.join("\n", tab(z+1)+"<CompositeItem> {",
                ToString.MainItemVO(it, z),
                string.join("", tab(z+2), "height:", it.height.to_string()),
                string.join("", tab(z+2), "width:", it.width.to_string()),
                string.join("", tab(z+1), "}"))

        /**
         *  CompositeVO
         *
         * sImages: list of SimpleImageVO
         * sImage9patchs: list of Image9patchVO
         * sLabels: list of LabelVO
         * layers: list of LayerItemVO
         *
         */
        def static CompositeVO(it: CompositeVO, z:int=0): string
            //print "to_string: CompositeVO"
            var sb0 = new StringBuilder()
            if it.sImages.size > 0
                for var obj0 in it.sImages
                    sb0.append(obj0.to_string(z+1))
                    sb0.append(",\n")

            var sb1 = new StringBuilder()
            if it.sImage9patchs.size > 0
                for var obj1 in it.sImage9patchs
                    sb1.append(obj1.to_string(z+1))
                    sb1.append(",\n")

            var sb2 = new StringBuilder()
            if it.sLabels.size > 0
                for var obj2 in it.sLabels
                    sb2.append(obj2.to_string(z+1))
                    sb2.append(",\n")

            var sb3 = new StringBuilder()
            if it.layers.size > 0
                for var obj3 in it.layers
                    sb3.append(obj3.to_string(z+1))
                    sb3.append(",\n")
        
            return string.join("\n", 
                string.join("", tab(z+1)+"<Composite> {"),
                string.join("", tab(z+2), "sImages:", sb0.len == 0 ? "{}" : "\n"+sb0.str),
                string.join("", tab(z+2), "sImage9patchs:", sb1.len == 0 ? "{}" : "\n"+sb1.str),
                string.join("", tab(z+2), "sLabels:", sb2.len == 0 ? "{}" : "\n"+sb2.str),
                string.join("", tab(z+2), "layers:", sb3.len == 0 ? "{}" : "\n"+sb3.str),
                string.join("", tab(z+1), "}"))


        /**
         *  Image9patchVO extends MainItemVO
         *
         * imageName: string
         * width: double
         * height: double
         *
         */
        def static Image9patchVO(it: Image9patchVO, z:int=0): string
            //print "to_string: Image9patchVO"
            return string.join("\n", tab(z+1)+"<Image9patch> {",
                ToString.MainItemVO(it, z),
                string.join("", tab(z+2), "imageName:", it.imageName),
                string.join("", tab(z+2), "height:", it.height.to_string()),
                string.join("", tab(z+2), "width:", it.width.to_string()),
                string.join("", tab(z+1), "}"))

        /**
         *  LabelVO extends MainItemVO
         *
         * text: string
         * style: string
         * size: int
         * align: int
         * height: double
         * width: double
         * multiline: bool
         *
         */
        def static LabelVO(it: LabelVO, z:int=0): string
            //print "to_string: LabelVO"
            return string.join("\n", tab(z+1)+"<Label> {",
                ToString.MainItemVO(it, z),
                string.join("", tab(z+2), "text:", it.text),
                string.join("", tab(z+2), "style:", it.style),
                string.join("", tab(z+2), "size:", it.size.to_string()),
                string.join("", tab(z+2), "align:", it.align.to_string()),
                string.join("", tab(z+2), "height:", it.height.to_string()),
                string.join("", tab(z+2), "width:", it.width.to_string()),
                string.join("", tab(z+1), "}"))

        /**
         *  LayerItemVO
         *
         * layerName: string
         * isVisible: bool
         * isLocked: bool
         *
         */
        def static LayerItemVO(it: LayerItemVO, z:int=0): string
            //print "to_string: LayerItemVO"
            return string.join("\n", tab(z+1)+"<Layer> {",
                string.join("", tab(z+2), "layerName:", it.layerName),
                string.join("", tab(z+2), "isVisible:", it.isVisible.to_string()),
                string.join("", tab(z+1), "}"))

        /**
         *  MainItemVO
         *
         * uniqueId: int
         * itemIdentifier: string
         * itemName: string
         * tags: array of string
         * x: double
         * y: double
         * originX: double
         * originY: double
         * zIndex: int
         * layerName: string
         * composite: CompositeVO?
         * shape: ShapeVO?
         * physics: PhysicsBodyDataVO?
         * height: double
         * width: double
         *
         */
        def static private tags_helper(tags: list of string) : string
            if tags != null 
                return string.joinv(",", tags.to_array())
            else
                return ""

        def static MainItemVO(it: MainItemVO, z:int=0): string
            //print "to_string: MainItemVO"uniqueId
            return string.join("\n", 
                string.join("", tab(z+2), "tags:[", tags_helper(it.tags), "]"),
                string.join("", tab(z+2), "uniqueId:", it.uniqueId.to_string()),
                string.join("", tab(z+2), "itemIdentifier:", it.itemIdentifier),
                string.join("", tab(z+2), "itemName:", it.itemName),
                string.join("", tab(z+2), "scaleX:", it.scaleX.to_string()),
                string.join("", tab(z+2), "scaleY:", it.scaleY.to_string()),
                string.join("", tab(z+2), "x:", it.x.to_string()),
                string.join("", tab(z+2), "y:", it.y.to_string()),
                string.join("", tab(z+2), "originX:", it.originX.to_string()),
                string.join("", tab(z+2), "originY:", it.originY.to_string()),
                string.join("", tab(z+2), "rotation:", it.rotation.to_string()),
                string.join("", tab(z+2), "zIndex:", it.zIndex.to_string()),
                string.join("", tab(z+2), "layerName:", it.layerName),
                string.join("", tab(z+2), "tint: "+ double_array_to_string(it.tint)),
                string.join("", tab(z+2), "shape:", it.shape == null ? "{}" : "\n"+it.shape.to_string(z+1)),
                string.join("", tab(z+2), "physics:", it.physics == null ? "{}" : "\n"+it.physics.to_string(z+1)),
                string.join("", tab(z+2), "composite:", it.composite == null ? "{}" : "\n"+it.composite.to_string(z+1))
                )

        /**
         *  PhysicsBodyDataVO
         *
         * bodyType: int
         * mass: double
         * allowSleep: bool
         * awake: bool
         * sensor: bool
         * density: double
         * friction: double
         * restitution: double
         *
         */
        def static PhysicsBodyDataVO(it: PhysicsBodyDataVO, z:int=0): string
            //print "to_string: PhysicsBodyDataVO"
            return string.join("\n", tab(z+1)+"<PhysicsBody> {",
                string.join("", tab(z+2), "bodyType:", it.bodyType.to_string()),
                string.join("", tab(z+2), "mass:", it.mass.to_string()),
                string.join("", tab(z+2), "allowSleep:", it.allowSleep.to_string()),
                string.join("", tab(z+2), "awake:", it.awake.to_string()),
                string.join("", tab(z+2), "sensor:", it.sensor.to_string()),
                string.join("", tab(z+2), "density:", it.density.to_string()),
                string.join("", tab(z+2), "friction:", it.friction.to_string()),
                string.join("", tab(z+2), "restitution:", it.restitution.to_string()),
                string.join("", tab(z+1), "}"))

        /**
         *  PhysicsPropertiesVO
         *
         * gravityX: double
         * gravityY: double
         * sleepVelocity: double
         * enabled: bool
         *
         */
        def static PhysicsPropertiesVO(it: PhysicsPropertiesVO, z:int=0): string
            //print "to_string: PhysicsPropertiesVO"
            return string.join("\n", tab(z+1)+"<PhysicsPropertiesVO> {",
                string.join("", tab(z+2), "gravityX:", it.gravityX.to_string()),
                string.join("", tab(z+2), "gravityY:", it.gravityY.to_string()),
                string.join("", tab(z+2), "sleepVelocity:", it.sleepVelocity.to_string()),
                string.join("", tab(z+2), "enabled:", it.enabled.to_string()),
                string.join("", tab(z+1), "}"))

        /**
         *  PointVO
         *
         * x: double
         * y: double
         *
         */
        def static PointVO(it: PointVO, z:int=0): string
            //print "to_string: PointVO"
            return string.join("\n", tab(z+1)+"<Point> {",
                string.join("", tab(z+2), "x:", it.x.to_string()),
                string.join("", tab(z+2), "y:", it.y.to_string()),
                string.join("", tab(z+1), "}"))

        /**
         *  ProjectInfoVO
         *
         * pixelToWorld : int
         * originalResolution : ResolutionEntryVO
         * resolutions: list of ResolutionEntryVO
         * scenes: list of SceneVO 
         * libraryItems: dict of string, CompositeItemVO
         *
         */
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

            return string.join("\n", tab(z+1)+"<Project> {",
                string.join("", tab(z+2), "pixelToWorld:", it.pixelToWorld.to_string()),
                string.join("", tab(z+2), "originalResolution:", it.originalResolution.to_string(z+1)),
                string.join("", tab(z+2), "scenes:", sb1.str),
                string.join("", tab(z+2), "libraryItems:", sb2.str),
                string.join("", tab(z+1), "}"))

        /**
         *  ResolutionEntryVO
         *
         * name: string
         * width: int
         * height: int
         * base: int
         *
         */
        def static ResolutionEntryVO(it: ResolutionEntryVO, z:int=0): string
            //print "to_string: ResolutionEntryVO"
            return string.join("\n", tab(z+1)+"<Resolution> {",
                string.join("", tab(z+2), "name:", it.name),
                string.join("", tab(z+2), "width:", it.width.to_string()),
                string.join("", tab(z+2), "height:", it.height.to_string()),
                string.join("", tab(z+1), "}"))


        /**
         *  SceneVO
         *
         * sceneName: string
         * composite : CompositeVO?
         * lightSystemEnabled: bool
         * ambientColor: array of double
         * physicsPropertiesVO: PhysicsPropertiesVO?
         * verticalGuides : list of double?
         * horizontalGuides : list of double?
         *
         */
        def static SceneVO(it: SceneVO, z:int=0): string
            //print "to_string: SceneVO"
            return string.join("\n", tab(z+1)+"<Scene> {",  
                string.join("", tab(z+2), "sceneName:", it.sceneName),
                string.join("", tab(z+2), "composite:", it.composite == null ? "{}" : "\n"+it.composite.to_string(z+2)),
                string.join("", tab(z+2), "lightSystemEnabled:", it.lightSystemEnabled.to_string()),
                string.join("", tab(z+2), "ambientColor:[", double_array_to_string(it.ambientColor), "]"),
                string.join("", tab(z+2), "physicsPropertiesVO:", it.physicsPropertiesVO == null ? "{}" : "\n"+it.physicsPropertiesVO.to_string()),
                string.join("", tab(z+1), "}"))

        /**
         *  ShapeVO
         *
         * polygons: list of ArrayList of PointVO
         *
         */
        def static ShapeVO(it: ShapeVO, z:int=0): string
            //print "to_string: ShapeVO"
            var sb1 = new StringBuilder()
            if it.polygons.size>0
                for var points in it.polygons
                    for point in points
                        sb1.append(point.to_string(z+1))


            return string.join("\n", tab(z+1)+"<Shape> {",
                string.join("","\t", tab(z+2)+"polygons:", sb1.str),
                string.join("", tab(z+1), "}"))


        /**
         *  SimpleImageVO extends MainItemVO
         *
         * imageName: string
         * isRepeat: bool
         * isPolygon: bool
         *
         */
        def static SimpleImageVO(it: SimpleImageVO, z:int=0): string
            //print "to_string: SimpleImageVO"
            return string.join("\n", tab(z+1)+"<SimpleImage> {",
                ToString.MainItemVO(it, z),
                string.join("", tab(z+2), "imageName:", it.imageName),
                string.join("", tab(z+2), "isRepeat:", it.isRepeat.to_string()),
                string.join("", tab(z+2), "isPolygon:", it.isPolygon.to_string()),
                string.join("", tab(z+1), "}"))

