[indent=4]
uses
    SDL
    SDLTTF
    Bosco
    Entitas


namespace ShmupWarz

    class HudRenderSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem

        const ACTIVE_ENTITIES : string  = "Active entities:         %3d"
        const TOTAL_RETAINED : string   = "Total reusable:          %3d"
        const TOTAL_REUSABLE : string   = "Total retained:          %3d"

        _game : Shmup
        _world : World
        _font: Bosco.Font
        _activeEntities : Sprite
        _totalRetained : Sprite
        _totalReusable : Sprite

        construct(game : Shmup)
            _game = game

        def setWorld(world : World)
            _world = world

        def initialize()
            _font = Bosco.Font.fromFile(_game.defaultFont, 16)
            _game.sprites.add(_activeEntities = createText(0, 40, ACTIVE_ENTITIES.printf(_world.count)))
            _game.sprites.add(_totalRetained = createText(0, 60, TOTAL_RETAINED.printf(_world.reusableEntitiesCount)))
            _game.sprites.add(_totalReusable = createText(0, 80, TOTAL_REUSABLE.printf(_world.retainedEntitiesCount)))

        def execute()
            setText(_activeEntities, ACTIVE_ENTITIES.printf(_world.count))
            setText(_totalRetained, TOTAL_RETAINED.printf(_world.retainedEntitiesCount))
            setText(_totalReusable, TOTAL_REUSABLE.printf(_world.reusableEntitiesCount))

        def createText(x : int, y : int, text : string) : Sprite
            var sprite = Sprite.fromRenderedText(_game.renderer, _font, text, Color.White)
            sprite.x = x
            sprite.y = y
            sprite.layer = Layer.HUD
            sprite.centered = false
            return sprite

        def setText(sprite : Sprite, text : string)
            sprite.setText(_game.renderer, _font, text, Color.White)


