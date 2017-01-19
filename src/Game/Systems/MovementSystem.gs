[indent=4]
uses sdx
uses Entitas

namespace ShmupWarz

    class MovementSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _group : Group
        _game : GameScene

        construct(game : GameScene)
            _game = game

        def setWorld(world : World)
            _world = world

        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.Position, Component.Velocity}))

        def execute()//ShmupWarz.Entity
            for var e in _group.getEntities()
                var entity = e as ShmupWarz.Entity
                var pos = entity.position
                var vel = entity.velocity
                pos.x += (vel.x * Sdx.graphics.deltaTime)
                pos.y += (vel.y * Sdx.graphics.deltaTime)



