[indent=4]
uses sdx
uses Entitas

namespace ShmupWarz

    class RemoveOffscreenShipsSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _group : Group
        _game : GameScene

        construct(game : GameScene)
            _game = game

        def setWorld(world : World)
            _world = world

        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.Position, Component.Bounds}))

        def execute()
            for var e in _group.getEntities()
                var entity = e as ShmupWarz.Entity
                if entity.hasPosition
                    if entity.position.y > _game.height - entity.bounds.radius
                        if !entity.isPlayer
                            entity.setDestroy(true)
                            



