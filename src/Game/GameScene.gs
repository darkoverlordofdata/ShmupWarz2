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

        prop readonly width: int = Sdx.graphics.width
        prop readonly height: int = Sdx.graphics.height
        prop readonly scale: double = Sdx.graphics.scale
        prop readonly pixelFactor: double = Sdx.graphics.pixelFactor
        prop readonly world : World
        prop readonly player : PlayerInputSystem

        construct(desktop: bool, scale: double)
            _world = createSystems()
            createBackground()
            createPlayer()

        def createSystems(): World
            return new World(components
                ).add(new MovementSystem(this)
                ).add(_player = new PlayerInputSystem(this)
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
        def render()
            world.execute()

        def resize(width: int, height: int)
            pass    
    

        
