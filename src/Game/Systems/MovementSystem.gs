[indent=4]
uses sdx
uses Entitas

namespace ShmupWarz

    class MovementSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        game: GameScene
        world: World
        group: Match

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        def initialize()
            group = MatchAllOf(world, {Component.Position, Component.Velocity})

        def execute()
            for var entity in group
                var pos = entity.position
                var vel = entity.velocity
                pos.x += (vel.x * Sdx.graphics.deltaTime)
                pos.y += (vel.y * Sdx.graphics.deltaTime)



