[indent=4]
uses sdx
uses sdx.files
uses sdx.graphics.s2d
uses Entitas

namespace ShmupWarz

    class ViewManagerSystem : Object implements ISystem, IInitializeSystem, ISetWorld
        game : GameScene
        world : World
        group : Group
        sprites: list of Sprite
        atlas: TextureAtlas

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        /**
        * Listen for resources to be added
        * and then load them in from the file
        */
        def initialize()
            group = world.getGroup(Matcher.AllOf({Component.Active}))
            group.onEntityAdded.add(onEntityAdded)
            // Sdx.app.sprites = new GenericArray of Sprite
            sprites = Sdx.app.sprites
            // load the overlap2d atlas
            atlas = new TextureAtlas()
            var imageFile = new FileHandle("orig/pack.atlas", sdx.FileType.Resource)
            var imageDir = new FileHandle("orig", sdx.FileType.Resource)
            atlas.load(new TextureAtlas.TextureAtlasData(imageFile, imageDir, false))

        /**
        *  OnEntityAdded event:
        */
        def onEntityAdded(g: Group, e: IEntity, ix: int, c: IComponent)
            scale : ScaleComponent
            layer : LayerComponent
            ordinal : int = 0

            var entity = e as Entity
            var res = entity.resource

            if res.path.index_of("/") == 0 || res.path.index_of("resource://") == 0
                res.sprite = Sprite.fromFile(Sdx.app.renderer, res.path)
            else
                res.sprite = Sprite.fromAtlas(Sdx.app.renderer, atlas, res.path)

            var sprite = (Sprite)res.sprite
            if sprite == null
                print "Failed to load %s", res.path
                return

            if entity.hasScale
                sprite.scale.x = entity.scale.x
                sprite.scale.y = entity.scale.y

            if entity.hasLayer
                sprite.layer = entity.layer.ordinal
                ordinal = entity.layer.ordinal

            if entity.hasTint
                sprite.color.r = (uint8)entity.tint.r
                sprite.color.g = (uint8)entity.tint.g
                sprite.color.b = (uint8)entity.tint.b

            if res.bgd
                sprite.centered = false

            /**
            * Insert sprite in layer order
            */
            if sprites.size == 0
                sprites.add(sprite)
            else
                var i = 0
                for s in sprites
                    if ordinal <= s.layer
                        sprites.insert(i, sprite)
                        return
                    else
                        i++
                sprites.add(sprite)



