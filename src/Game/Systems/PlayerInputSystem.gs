[indent=4]
uses sdx
uses Entitas

namespace ShmupWarz

    class PlayerInputSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem, InputProcessor
        world: World
        group: Group
        game: GameScene
        timeToFire: double = 0
        shoot: bool
        mouseX: int
        mouseY: int
        width: int
        height: int
        scale: double
        FireRate : static double = 0.1

        construct(game: GameScene)
            this.game = game
            width = game.width
            height = game.height
            scale = game.scale
            Sdx.input.setInputProcessor(this)

        def setWorld(world: World)
            this.world = world

        def initialize()
            group = world.getGroup(Matcher.AllOf({Component.Player}))

        /**
        * Move the player
        */
        def moveTo(x: int, y: int)
            mouseX = (int)((double)x/scale)
            mouseY = (int)((double)y/scale)


        /**
        * Do the keyboard polling
        */
        def execute()
            //try
            var player = group.getSingleEntity() as Entity
            if player != null
                var position = player.position
                position.x = mouseX
                position.y = mouseY

                if shoot do timeToFire -= Sdx.graphics.deltaTime
                if timeToFire < 0
                    createBullet(position.x - 27, position.y + 2)
                    createBullet(position.x + 27, position.y + 2)
                    timeToFire = FireRate



        def keyDown(keycode: int): bool
            if Input.Keys.z == keycode do shoot = true
            return true

        def keyUp(keycode: int): bool
            return true
            
        def keyTyped(character: char): bool
            return false
            
        def touchDown(screenX: int, screenY: int, pointer: int, button: int): bool
            moveTo(screenX, screenY)
            shoot = true
            return false
            
        def touchUp(screenX: int, screenY: int, pointer: int, button: int): bool
            shoot = false
            return true
            
        def touchDragged(screenX: int, screenY: int, pointer: int): bool
            moveTo(screenX, screenY)
            return false
            
        def mouseMoved(screenX: int, screenY: int): bool
            moveTo(screenX, screenY)
            return false
            
        def scrolled(amount: int): bool
            return false
            
