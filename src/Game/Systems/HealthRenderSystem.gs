[indent=4]
uses sdx
uses sdx.graphics.s2d
uses Entitas
uses GLib

namespace ShmupWarz 


    class HealthRenderSystem : Object implements  ISetWorld,  IExecuteSystem,  IInitializeSystem, ISystem
        game: GameScene
        world: World
        group: MatchGroup

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        def initialize()
            group = MatchAllOf(world, {Component.Position, Component.Health, Component.Text})

        def execute()
            sprite:Sprite = null

            for var entity in group
                var position = entity.position
                var health = entity.health
                var text = entity.text
                var pct = "%d%%".printf((int)Math.fmin(100, health.health/health.maximumHealth*100.0))


                if pct == text.text
                    // print "HealthRenderSystem::execute0 %s - %s", entity.name, pct
                    sprite = text.sprite
                    if sprite == null
                        sprite = Sprite.fromRenderedText(Sdx.app.renderer, Sdx.app.font, text.text, sdx.graphics.Color.Lime)
                        sprite.centered = false
                        text.sprite = sprite
                else
                    // print "HealthRenderSystem::execute1 %s - %s", entity.name, pct
                    text.text = pct
                    text.sprite = null
                    sprite = Sprite.fromRenderedText(Sdx.app.renderer, Sdx.app.font, text.text, sdx.graphics.Color.LimeGreen)
                    sprite.centered = false
                    text.sprite = sprite

                sprite.x = (int)position.x
                sprite.y = (int)position.y
                Sdx.app.onetime.add(sprite)


