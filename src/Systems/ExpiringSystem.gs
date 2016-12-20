[indent=4]
uses
    Bosco
    Entitas


namespace ShmupWarz

    class ExpiringSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _group : Group
        _game : Game

        construct(game : Game)
            _game = game

        def setWorld(world:World)
            _world = world

        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.Expires}))

        def execute()
            for var entity in _group.getEntities()
                if (getExpires(entity).delay -= _game.delta) <= 0
                    setDestroy(entity, true)


