[indent=4]
uses sdx
uses Entitas

namespace ShmupWarz

    class RemoveOffscreenShipsSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _group : Group
        _game : ShmupWarzGame

        construct(game : ShmupWarzGame)
            _game = game

        def setWorld(world : World)
            _world = world

        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.Position, Component.Bounds}))

        def execute()
            for var entity in _group.getEntities()
                if hasPosition(entity)
                    if getPosition(entity).y > _game.height - getBounds(entity).radius
                        if !isPlayer(entity)
                            setDestroy(entity, true)
                            



