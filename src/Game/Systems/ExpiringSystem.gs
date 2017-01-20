[indent=4]
uses sdx
uses Entitas


namespace ShmupWarz

    class ExpiringSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _group : Group
        _game : GameScene

        construct(game : GameScene)
            _game = game

        def setWorld(world:World)
            _world = world

        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.Expires}))

        def execute()
            for var e in _group.getEntities()
                var entity = e as Entity
                if (entity.expires.delay -= Sdx.graphics.deltaTime) <= 0
                    entity.setDestroy(true)


