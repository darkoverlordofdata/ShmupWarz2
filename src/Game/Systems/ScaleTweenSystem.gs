[indent=4]
uses sdx
uses sdx.graphics.s2d
uses Entitas

namespace ShmupWarz

    class ScaleTweenSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _group : Group
        _game : GameScene

        construct(game : GameScene)
            _game = game

        def setWorld(world : World)
            _world = world

        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.ScaleTween, Component.Resource}))

        def execute()
            for var e in _group.getEntities()
                var entity = e as ShmupWarz.Entity
                var scaleTween = entity.scaleTween

                if scaleTween.active
                    var res = entity.resource
                    var sprite = (Sprite)res.sprite
                    var scale = sprite.scale

                    sprite.scale.x += scaleTween.speed * Sdx.graphics.deltaTime
                    sprite.scale.y += scaleTween.speed * Sdx.graphics.deltaTime

                    if scale.x > scaleTween.max
                        sprite.scale.x = scaleTween.max
                        sprite.scale.y = scaleTween.max
                        scaleTween.active = false

                    else if scale.x < scaleTween.min
                        sprite.scale.x = scaleTween.min
                        sprite.scale.y = scaleTween.min
                        scaleTween.active = false



