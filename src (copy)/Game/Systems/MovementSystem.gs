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

        def execute()
            for var entity in _group.getEntities()
                var pos = getPosition(entity)
                var vel = getVelocity(entity)
                pos.x += (vel.x * Sdx.graphics.deltaTime)
                pos.y += (vel.y * Sdx.graphics.deltaTime)



