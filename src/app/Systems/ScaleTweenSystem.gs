[indent=4]
uses sdx
uses sdx.graphics.s2d
uses Entitas

namespace ShmupWarz

    class ScaleTweenSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        game: GameScene
        world: World
        group: Match

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        def initialize()
            group = MatchAllOf(world, {Component.ScaleTween, Component.View})

        def execute()
            for var entity in group
                var scaleTween = entity.scaleTween

                if scaleTween.active
                    var view = entity.view
                    var sprite = view.sprite
                    var scale = sprite.scale

                    sprite.scale.x += scaleTween.speed * Sdx.graphics.deltaTime
                    sprite.scale.y += scaleTween.speed * Sdx.graphics.deltaTime

                    if scale.x > scaleTween.max
                        scale.x = scaleTween.max
                        scale.y = scaleTween.max
                        scaleTween.active = false

                    else if scale.x < scaleTween.min
                        scale.x = scaleTween.min
                        scale.y = scaleTween.min
                        scaleTween.active = false



