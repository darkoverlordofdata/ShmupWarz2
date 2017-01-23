/**
 * Entities.gs
 *
 * Entity factory
 *
 */
[indent=4]
uses Entitas
uses GLib
uses sdx
uses sdx.graphics.s2d
uses o2d.data
uses o2d.resources

namespace ShmupWarz
    enum Enemy
        Enemy1
        Enemy2
        Enemy3


    enum Layer
        DEFAULT
        BACKGROUND
        TEXT
        LIVES
        MINES
        ACTORS_1
        ACTORS_2
        ACTORS_3
        PLAYER
        BULLET
        PARTICLE
        HUD

    enum Effect
        PEW
        ASPLODE
        SMALLASPLODE

    class Entities

        prop readonly rm: ResourceManager
        prop readonly atlas: TextureAtlas
        prop readonly project: ProjectInfoVO 
        prop readonly scene: SceneVO


        construct()
            _rm = new ResourceManager()
            rm.initAllResources()
            rm.loadAtlasPack()
            _atlas = rm.mainPack
            _project = rm.loadProjectVO()
            _scene = rm.loadSceneVO("MainScene")

        /**
        * Create the basic Entity
        *
        * @param name of Entity
        * @param x position
        * @param y position
        * @param centered?
        * @returns base entity with components:
        *      {Bounds, Position, Layer, Sprite}
        */
        def createEntity(name: string, x: double=0, y: double=0, centered: bool=true): Entity
            var path = getResource(name)
            var sprite = atlas.createSprite(path)

            return coreEntity(name
                ).addBounds(sprite.width/2
                ).addPosition(x, y
                ).addLayer(getLayer(name)
                ).addView(sprite, centered)

        def coreEntity(name:string): Entity
            return (Entity)World.instance.createEntity(name)

        /**
        *  Create Background
        */
        def createBackground() : IEntity
            return createEntity("background", 0, 0, false
                ).addScale(2, 1
                ).setActive(true)

        /**
        *  Create Player
        */
        def createPlayer() : IEntity

            return createEntity("player", Sdx.graphics.width/2, Sdx.graphics.height-80
                ).setPlayer(true
                ).addHealth(100, 100
                ).addVelocity(0, 0
                ).setActive(true)

        /**
        *  Create Bullet
        */
        def createBullet(x : double, y : double) : IEntity
            var r =(double) 0xad    // min red
            var g =(double) 0xaf    // min green
            var b =(double) 0x2f    // min blue
            var m = 255.0           // max color
            var s = 10.0            // speed
            var a = 255.0           // alpha

            return createEntity("bullet", x, y
                ).setBullet(true
                ).addHealth(1.5, 1.5
                ).addVelocity(0, -800
                ).addTint(0xAD, 0xFF, 0x2F, 255
                ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
                ).addExpires(1
                ).addSoundEffect(Effect.PEW
                ).setActive(true)


        /**
        *  Create Particle
        */
        def createParticle(x : double, y : double) : IEntity
            var radians = World.random.next_double() * 2 * Math.PI
            var magnitude = World.random.int_range(0, 200)
            var velocityX = magnitude * Math.cos(radians)
            var velocityY = magnitude * Math.sin(radians)
            var scale = World.random.double_range(0.1, 1.0)

            return createEntity("particle", x, y
                ).addVelocity(velocityX, velocityY
                ).addExpires(1
                ).addScale(scale, scale
                ).addTint(0xFA, 0xFA, 0xD2, 255
                ).setActive(true)

        /**
        *  Create Explosion
        */
        def createExplosion(x: double, y: double) : IEntity
            var r = (double) 0xaa   // min red
            var g = (double) 0xaa   // min green
            var b = (double) 0xa2   // min blue
            var m = 255.0           // max color
            var s = 10.0            // speed
            var a = 255.0           // alpha

            return createEntity("explosion", x, y
                ).addExpires(1.0
                ).addScale(0.5, 0.5
                ).addSoundEffect(Effect.ASPLODE
                ).addScaleTween(0.001, 0.5, -3, false, true
                ).addTint(0xFA, 0xFA, 0xD2, 255
                ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
                ).setActive(true)

        /**
        *  Create Small Explosion
        */
        def createBang(x: double, y: double) : IEntity
            var r = (double) 0xae   // min red
            var g = (double) 0xa8   // min green
            var b = (double) 0xaa   // min blue
            var m = 255.0           // max color
            var s = 10.0            // speed
            var a = 255.0           // alpha

            return createEntity("bang", x, y
                ).addExpires(1.0
                ).addScale(1.0, 1.0
                ).addSoundEffect(Effect.SMALLASPLODE
                ).addScaleTween(0.001, 1.0, -3, false, true
                ).addTint(0xEE, 0xE8, 0xAA, 255
                ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
                ).setActive(true)
            
        /**
        *  Create Small Enemy
        */
        def createEnemy1() : IEntity
            var x = World.random.int_range(0, Sdx.graphics.width)
            var y = Sdx.graphics.height/2 - 200

            return createEntity("enemy1", x, y
                ).setEnemy(true
                ).addHealth(10, 10
                ).addVelocity(0, 40
                ).addText("", null
                ).setActive(true)

        /**
        *  Create Medium Sized Enemy
        */
        def createEnemy2() : IEntity
            var x = World.random.int_range(0, Sdx.graphics.width)
            var y = Sdx.graphics.height/2 - 100

            return createEntity("enemy2", x, y
                ).setEnemy(true
                ).addHealth(20, 20
                ).addVelocity(0, 30
                ).addText("", null
                ).setActive(true)


        /**
        *  Create Large Enemy
        */
        def createEnemy3() : IEntity
            var x = World.random.int_range(0, Sdx.graphics.width)
            var y = Sdx.graphics.height/2 - 50

            return createEntity("enemy3", x, y
                ).setEnemy(true
                ).addHealth(60, 60
                ).addVelocity(0, 20
                ).addText("", null
                ).setActive(true)


        // TODO: Check layer names in Overlap2D editor 
        // def static getResource(name:string):string 
        //     return getItem(name).composite.sImages[0].imageName
        def static getResource(name: string): string
            case name
                when "background"
                    return "BackdropBlackLittleSparkBlack"
                when "player"
                    return "spaceshipspr"
                when "bullet"
                    return "bullet"
                when "particle"
                    return "star"
                when "bang"
                    return "bang"
                when "explosion"
                    return "explosion"
                when "enemy1"
                    return "enemy1"
                when "enemy2"
                    return "enemy2"
                when "enemy3"       
                    return "enemy3"
            return ""

        // TODO: Check layer names in Overlap2D editor 
        // def static getLayer(name:string): int
        //     return layerFromName(getItem(name).layerName.up())
        def static getLayer(name: string): Layer
            case name
                when "background"
                    return Layer.BACKGROUND
                when "player"
                    return Layer.PLAYER
                when "bullet"
                    return Layer.BULLET
                when "particle"
                    return Layer.PARTICLE
                when "explosion"
                    return Layer.PARTICLE
                when "bang"
                    return Layer.PARTICLE
                when "enemy1"
                    return Layer.ACTORS_1
                when "enemy2"
                    return Layer.ACTORS_2
                when "enemy3"       
                    return Layer.ACTORS_3
            return Layer.DEFAULT

