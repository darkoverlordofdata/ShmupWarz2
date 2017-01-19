[indent=4]
uses sdx
uses Entitas

namespace ShmupWarz

    class PlayerInputSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem, InputProcessor
        _group : Group
        _world : World
        _game : GameScene
        _timeToFire : double = 0
        _shoot: bool
        _mouseX: int
        _mouseY: int
        _width: int
        _height: int
        _scale: double
        FireRate : static double = 0.1

        construct(game : GameScene)
            _game = game
            _width = game.width
            _height = game.height
            _scale = game.scale
            Sdx.input.setInputProcessor(this)

        def setWorld(world:World)
            _world = world

        def initialize()
            _group = _world.getGroup(Matcher.AllOf({Component.Player}))

        /**
        * Move the player
        */
        def moveTo(x : int, y : int)
            _mouseX = (int)((double)x/_scale)
            _mouseY = (int)((double)y/_scale)


        /**
        * Do the keyboard polling
        */
        def execute()
            //try
            var player = _group.getSingleEntity() as ShmupWarz.Entity
            if player != null
                var position = player.position
                position.x = _mouseX
                position.y = _mouseY

                if _shoot do _timeToFire -= Sdx.graphics.deltaTime
                if _timeToFire < 0
                    createBullet(position.x - 27, position.y + 2)
                    createBullet(position.x + 27, position.y + 2)
                    _timeToFire = FireRate



        def keyDown(keycode: int): bool
            if Input.Keys.z == keycode do _shoot = true
            return true

        def keyUp(keycode: int): bool
            return true
            
        def keyTyped(character: char): bool
            return false
            
        def touchDown(screenX: int, screenY: int, pointer: int, button: int): bool
            moveTo(screenX, screenY)
            _shoot = true
            return false
            
        def touchUp(screenX: int, screenY: int, pointer: int, button: int): bool
            _shoot = false
            return true
            
        def touchDragged(screenX: int, screenY: int, pointer: int): bool
            moveTo(screenX, screenY)
            return false
            
        def mouseMoved(screenX: int, screenY: int): bool
            moveTo(screenX, screenY)
            return false
            
        def scrolled(amount: int): bool
            return false
            
