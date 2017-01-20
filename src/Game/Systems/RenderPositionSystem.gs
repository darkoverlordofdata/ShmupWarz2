[indent=4]
uses sdx
uses sdx.graphics.s2d
uses Entitas

namespace ShmupWarz

    class RenderPositionSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        game: GameScene
        world: World
        group: MatchGroup

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        def initialize()
            group = MatchAllOf(world, {Component.Resource, Component.Position})

        def execute()
            for var entity in group
                var res = entity.resource
                var pos = entity.position
                var sprite = (Sprite)res.sprite
                sprite.x = (int)pos.x
                sprite.y = (int)pos.y



