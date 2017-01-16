[indent=4]
uses sdx
uses Entitas

namespace ShmupWarz

    class DestroySystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _group : Group
        _game : ShmupWarzGame
        _sprites : list of Sprite
        
        construct(game : ShmupWarzGame)
            _game = game

        def setWorld(world : World)
            _world = world

        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.Destroy}))
            _sprites = _game.sprites

        def execute()
            res : ResourceComponent

            for var entity in _group.getEntities()
                if hasResource(entity)
                    res = getResource(entity)
                    for s in _sprites
                        var sprite = (Sprite)res.sprite
                        if s.id == sprite.id
                            _sprites.remove(s)
                            break

                _world.destroyEntity(entity)


