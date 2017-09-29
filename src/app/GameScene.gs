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
        prop readonly factory: Entities
        k: int
        t: double
        profile: bool = true
        t1: double = 0.0
        t2: double = 0.0
        t3: double = 0.0

        construct(desktop: bool, scale: double)
            _factory = new Entities()
            _world = createSystems()
            factory.createBackground()
            factory.createPlayer()


        /**
         * Callback from engine entity factory
         * ShmupWarz.Entity shadows and extends Entitas.Entity.
         * This passes a new ShmupWarz.Entity back to the base class factory
         */
        def createEntity(componentsEnum: array of string, totalComponents: int): IEntity
            return (IEntity)(new Entity(componentsEnum, totalComponents))



        def createSystems(): World
            return new World(components
                ).setEntityFactory(this
                ).add(new MovementSystem(this)
                ).add(new PlayerInputSystem(this)
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
            if profile do t1 = (double)GLib.get_real_time()/1000000.0
            world.execute()
            if profile
                t2 = (double)GLib.get_real_time()/1000000.0
                t3 = t2 - t1
                t = t + t3
                k += 1
                if k == 1000
                    k = 0
                    t = t / 1000.0
                    print "%f", t
                    t = 0


        def resize(width: int, height: int)
            pass    
    

        
