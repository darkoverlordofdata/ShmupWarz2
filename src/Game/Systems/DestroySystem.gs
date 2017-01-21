[indent=4]
uses sdx
uses sdx.graphics.s2d
uses Entitas

namespace ShmupWarz

    class DestroySystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        game: GameScene
        world: World
        group: MatchGroup
        sprites: list of Sprite
        
        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        def initialize()
            group = MatchAllOf(world, {Component.Destroy})
            sprites = Sdx.app.sprites

        def execute()
            sprite: sdx.graphics.s2d.Sprite

            for var entity in group
                if entity.hasView
                    sprite = entity.view.sprite
                    for s in sprites
                        if s.id == sprite.id
                            sprites.remove(s)
                            break

                world.destroyEntity(entity)


