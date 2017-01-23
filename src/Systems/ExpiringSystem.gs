[indent=4]
uses sdx
uses Entitas


namespace ShmupWarz

    class ExpiringSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        game: GameScene
        world: World
        group: Match

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        def initialize()
            group = MatchAllOf(world, {Component.Expires})

        def execute()
            for var entity in group
                if (entity.expires.delay -= Sdx.graphics.deltaTime) <= 0
                    entity.setDestroy(true)


