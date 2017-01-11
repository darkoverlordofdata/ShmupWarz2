[indent=4]
uses
    Bosco
    Entitas

namespace ShmupWarz

    class DestroySystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _group : Group
        _game : Shmup
        _sprites : GenericArray of Sprite

        construct(game : Shmup)
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
                    for var i=0 to (_sprites.length-1)
                        var sprite = (Sprite)res.sprite
                        if _sprites[i].id == sprite.id
                            _sprites.remove_index(i)
                            break

                _world.destroyEntity(entity)


