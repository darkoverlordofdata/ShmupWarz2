[indent=4]
/**
 * GameScene.gs
 *
 * 
 *
 */
uses sdx
uses sdx.scenes.scene2d
uses o2d
uses o2d.data
uses o2d.scene2d
uses Entitas

namespace ShmupWarz

    class GameScene : Object implements Screen

        prop sceneLoader: SceneLoader
        prop ui: Stage
        prop readonly width: int
        prop readonly height: int
        prop readonly scale: double
        
        world : World
        player : PlayerInputSystem

        construct(desktop: bool, scale: double)
            _sceneLoader = sceneLoader
            _ui = ui
            _width = Sdx.graphics.width
            _height = Sdx.graphics.height
            _scale = 1.0
            
        def hide()
            pass
        def dispose()
            pass
        def pause()
            pass
        def show()
            pass
        def resume()
            pass
        def render(delta: double)
            world.execute()
            // Gdx.gl.glClearColor(0f, 0f, 0f, 1f)
            // Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT)
            // sceneLoader.engine.update(delta)
            // ui.act()
            // ui.draw()

        def resize(width: int, height: int)
            pass    
    
        def createSystems()
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
