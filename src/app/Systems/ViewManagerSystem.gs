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

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        /**
        * Listen for resources to be added
        * and add them to the display que
        */
        def initialize()
            group = world.getGroup(Matcher.AllOf({Component.Active}))
            group.onEntityAdded.add(onEntityAdded)

        /**
        *  OnEntityAdded event:
        */
        def onEntityAdded(g: Group, e: IEntity, ix: int, c: IComponent)
            scale : ScaleComponent
            layer : LayerComponent
            ordinal : int = 0

            var entity = e as Entity
            var view = entity.view
            var sprite = view.sprite

            if entity.hasScale
                sprite.scale.x = entity.scale.x
                sprite.scale.y = entity.scale.y

            if entity.hasLayer
                ordinal = entity.layer.ordinal
                sprite.layer = ordinal

            if entity.hasTint
                sprite.color.r = (uint8)entity.tint.r
                sprite.color.g = (uint8)entity.tint.g
                sprite.color.b = (uint8)entity.tint.b
                sprite.color.a = (uint8)entity.tint.a

            sprite.centered = view.centered

            /**
            * Insert sprite in layer order
            */
            var sprites = Sdx.app.sprites
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



