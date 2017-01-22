[indent=4]
uses sdx
uses Entitas

namespace ShmupWarz

    class RemoveOffscreenShipsSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        game: GameScene
        world: World
        group: Match

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        def initialize()
            group = MatchAllOf(world, {Component.Position, Component.Bounds})

        def execute()
            for var entity in group
                if entity.hasPosition
                    if entity.position.y > game.height - entity.bounds.radius
                        if !entity.isPlayer
                            entity.setDestroy(true)
                            



