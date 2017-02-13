/**
 * GameScene.gs
 *
 * 
 *
 */
[indent=4]
uses sdx
uses sdx.scenes.scene2d
uses o2d
uses o2d.data
uses o2d.scene2d
uses Entitas

namespace ShmupWarz

    class GameScene : Object implements Screen, IEntityFactory

        prop readonly width: int = Sdx.graphics.width
        prop readonly height: int = Sdx.graphics.height
        prop readonly scale: double = Sdx.graphics.scale
        prop readonly pixelFactor: double = Sdx.graphics.pixelFactor
        prop readonly world : World
        prop readonly player : PlayerInputSystem
        prop readonly factory: Entities

        k: int
        t: double

        construct(desktop: bool, scale: double)
            _factory = new Entities()
            _world = createSystems()
            factory.createBackground()
            factory.createPlayer()


        /**
         * Callback from engine entity factory
         */
        def createEntity(componentsEnum: array of string, totalComponents: int): IEntity
            return (IEntity)(new Entity(componentsEnum, totalComponents))


        def createSystems(): World
            return new World(components
                ).setEntityFactory(this
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
            var t1 = (double)GLib.get_real_time()/1000000.0
            world.execute()
            var t2 = (double)GLib.get_real_time()/1000000.0
            var t3 = t2 - t1
            //print "%f", t3
            t = t + t3
            k += 1
            if k == 1000
                k = 0
                t = t / 1000.0
                print "%f", t
                t = 0


        def resize(width: int, height: int)
            pass    
    

        
