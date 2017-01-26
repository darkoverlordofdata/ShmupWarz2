[indent=4]
uses sdx
uses sdx.graphics.s2d
uses Entitas


namespace ShmupWarz

    class HudRenderSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem

        const ACTIVE_ENTITIES : string  = "Active entities:         %3d"
        const TOTAL_RETAINED : string   = "Total reusable:          %3d"
        const TOTAL_REUSABLE : string   = "Total retained:          %3d"

        game: GameScene
        world: World
        activeEntities: Sprite
        totalRetained: Sprite
        totalReusable: Sprite

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        def initialize()
            Sdx.app.sprites.add(activeEntities = createText(0, 40, ACTIVE_ENTITIES.printf(world.count)))
            Sdx.app.sprites.add(totalRetained = createText(0, 60, TOTAL_RETAINED.printf(world.reusableEntitiesCount)))
            Sdx.app.sprites.add(totalReusable = createText(0, 80, TOTAL_REUSABLE.printf(world.retainedEntitiesCount)))

        def execute()
            setText(activeEntities, ACTIVE_ENTITIES.printf(world.count))
            setText(totalRetained, TOTAL_RETAINED.printf(world.retainedEntitiesCount))
            setText(totalReusable, TOTAL_REUSABLE.printf(world.reusableEntitiesCount))

        def createText(x: int, y: int, text: string): Sprite
            var sprite = new Sprite.text(text, Sdx.app.font, sdx.graphics.Color.White)
            sprite.x = x
            sprite.y = y
            sprite.layer = Layer.HUD
            sprite.centered = false
            return sprite

        def setText(sprite: Sprite, text: string)
            sprite.setText(text, Sdx.app.font, sdx.graphics.Color.White)


