[indent=4]
uses
    Bosco
    Entitas

namespace ShmupWarz

    class MovementSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _group : Group
        _game : Shmup

        construct(game : Shmup)
            _game = game

        def setWorld(world : World)
            _world = world

        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.Position, Component.Velocity}))

        def execute()
            for var entity in _group.getEntities()
                var pos = getPosition(entity)
                var vel = getVelocity(entity)
                pos.x += (vel.x * _game.delta)
                pos.y += (vel.y * _game.delta)



