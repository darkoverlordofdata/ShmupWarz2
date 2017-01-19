[indent=4]
uses sdx
uses sdx.graphics.s2d
uses Entitas

namespace ShmupWarz

    class RenderPositionSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _group: Group
        _game : GameScene
        _sprites : list of Sprite

        construct(game : GameScene)
            _game = game

        def setWorld(world:World)
            _group = world.getGroup(Matcher.AllOf({Component.Resource, Component.Position}))

        def initialize()
            _sprites = Sdx.app.sprites

        def execute()
            for var entity in _group.getEntities()
                var res = getResource(entity)
                var pos = getPosition(entity)
                var sprite = (Sprite)res.sprite
                sprite.x = (int)pos.x
                sprite.y = (int)pos.y



