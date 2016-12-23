/**
 * Game.gs
 *
 * 
 *
 */
[indent=4]
uses Bosco
uses Entitas
uses SDL
uses SDLTTF

namespace ShmupWarz

    // Resource URI
    const RES : string = "resource:///darkoverlordofdata/shmupwarz"
    const SCREEN_WIDTH :int = 800
    const SCREEN_HEIGHT :int = 600

    /** 
    * Start the application
    */

    class Game : AbstractGame

        world : World
        arial : Bosco.Font
        player : PlayerInputSystem

        construct(rootPath: string)
            super()
            initializePools()
            name = "Shmup Warz"
            width = SCREEN_WIDTH
            height = SCREEN_HEIGHT
            running = true
            defaultFont = rootPath+"/fonts/OpenDyslexic-Bold.otf"

        /**
        *  OnLoop
        *
        * Process the game engine
        */
        def override Update(delta: double)
            world.execute()

        /**
        *  OnInit
        *
        * load assets
        */
        def override Initialize():bool
            if super.Initialize()

                arial = Bosco.Font.fromFile(defaultFont, 20)
                if arial == null
                    print "Failed to load font! SDL Error: %s", SDL.get_error()

                world = new World(components
                    ).add(new MovementSystem(this)
                    ).add(player = new PlayerInputSystem(this)
                    ).add(new SoundEffectSystem(this)
                    ).add(new CollisionSystem(this)
                    ).add(new ExpiringSystem(this)
                    ).add(new EntitySpawningTimerSystem(this)
                    ).add(new ColorTweenSystem(this)
                    ).add(new ScaleTweenSystem(this)
                    ).add(new RemoveOffscreenShipsSystem(this)
                    ).add(new ViewManagerSystem(this)
                    ).add(new RenderPositionSystem(this)
                    ).add(new HealthRenderSystem(this)
                    ).add(new HudRenderSystem(this)
                    ).add(new DestroySystem(this)
                    ).initialize()
                
                createBackground()
                createPlayer()

            return true

        /**
        *  OnEvent
        *
        * Handle events
        */
        def override Events(e:SDL.Event)

            if keys[Input.Keycode.ESCAPE] == 1
                running = false

            if e.type == SDL.EventType.QUIT
                running = false

            /* Mouse Events*/
            if e.type == EventType.MOUSEMOTION || e.type == EventType.MOUSEBUTTONDOWN || e.type == EventType.MOUSEBUTTONUP
                player.onMouseEvent(e.type, e.motion.x, e.motion.y)
                return

            /* Touch Events*/
            if e.type == EventType.FINGERMOTION || e.type == EventType.FINGERDOWN || e.type == EventType.FINGERUP
                player.onMouseEvent(e.type, (int)e.tfinger.x, (int)e.tfinger.y)
                return


        /**
        *  OnCleanup
        *
        * release assets
        */
        def override Dispose()
            SDL.quit()
            SDLImage.quit()


