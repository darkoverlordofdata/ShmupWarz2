/**
 * Entities.gs
 *
 * IEntity factory
 *
 */
[indent=4]
uses Entitas
uses GLib
uses sdx

namespace ShmupWarz

    const Tau : double = 2 * Math.PI

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


    def createEntity(name:string): ShmupWarz.Entity
        return (ShmupWarz.Entity)World.instance.createEntity(name)
    /**
    *  Create Background
    */
    def createBackground() : IEntity
        return createEntity("background"
        ).addPosition(0, 0
        ).addScale(2, 1
        ).addResource("BackdropBlackLittleSparkBlack", null, true)

    /**
    *  Create Player
    */
    def createPlayer() : IEntity

        // defined in overlap2d in project.libraryItem["player"]
        // var o = project.libraryItem["player"]
        // look in pack.png at rect(o.x, o.y. o.width, o.height)
        //

        return createEntity("player"
        ).setPlayer(true
        ).addBounds(43
        ).addHealth(100, 100
        ).addVelocity(0, 0
        ).addLayer(Layer.PLAYER
        ).addPosition(Sdx.graphics.width/2, Sdx.graphics.height-80
        ).addResource("spaceshipspr", null, false)
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
        return createEntity("bullet"
        ).setBullet(true
        ).addHealth(1.5, 1.5
        ).addPosition(x, y
        ).addVelocity(0, -800
        ).addTint(0xAD, 0xFF, 0x2F, 255
        ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
        ).addBounds(5
        ).addExpires(1
        ).addLayer(Layer.BULLET
        ).addResource("bullet", null, false
        ).addSoundEffect(Effect.PEW)

    /**
    *  Create Particle
    */
    def createParticle(x : double, y : double) : IEntity
        var radians = World.random.next_double() * Tau
        var magnitude = World.random.int_range(0, 200)
        var velocityX = magnitude * Math.cos(radians)
        var velocityY = magnitude * Math.sin(radians)
        var scale = World.random.double_range(0.1, 1.0)
        return createEntity("particle"
        ).addPosition(x, y
        ).addVelocity(velocityX, velocityY
        ).addExpires(1
        ).addLayer(Layer.PARTICLE
        ).addScale(scale, scale
        ).addTint(0xFA, 0xFA, 0xD2, 255
        ).addResource("star", null, false)

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
        return createEntity("explosion"
        ).addPosition(x, y
        ).addExpires(1.0
        ).addLayer(Layer.PARTICLE
        ).addScale(0.5, 0.5
        ).addSoundEffect(Effect.ASPLODE
        ).addScaleTween(0.001, 0.5, -3, false, true
        ).addTint(0xFA, 0xFA, 0xD2, 255
        ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
        ).addResource("explosion", null, false)

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
        return createEntity("explosion"
        ).addPosition(x, y
        ).addExpires(1.0
        ).addLayer(Layer.PARTICLE
        ).addScale(1.0, 1.0
        ).addSoundEffect(Effect.SMALLASPLODE
        ).addScaleTween(0.001, 1.0, -3, false, true
        ).addTint(0xEE, 0xE8, 0xAA, 255
        ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
        ).addResource("bang", null, false)

    /**
    *  Create Small Enemy
    */
    def createEnemy1() : IEntity
        var x = World.random.int_range(0, Sdx.graphics.width)
        var y = Sdx.graphics.height/2 - 200
        return createEntity("enemy1"
        ).setEnemy(true
        ).addBounds(20
        ).addHealth(10, 10
        ).addVelocity(0, 40
        ).addLayer(Layer.ACTORS_1
        ).addPosition(x, y
        ).addText("", null
        ).addResource("enemy1", null, false)


    /**
    *  Create Medium Sized Enemy
    */
    def createEnemy2() : IEntity
        var x = World.random.int_range(0, Sdx.graphics.width)
        var y = Sdx.graphics.height/2 - 100
        return createEntity("enemy2"
        ).setEnemy(true
        ).addBounds(40
        ).addHealth(20, 20
        ).addVelocity(0, 30
        ).addLayer(Layer.ACTORS_2
        ).addPosition(x, y
        ).addText("", null
        ).addResource("enemy2", null, false)


    /**
    *  Create Large Enemy
    */
    def createEnemy3() : IEntity
        var x = World.random.int_range(0, Sdx.graphics.width)
        var y = Sdx.graphics.height/2 - 50
        return createEntity("enemy3"
        ).setEnemy(true
        ).addBounds(70
        ).addHealth(60, 60
        ).addVelocity(0, 20
        ).addLayer(Layer.ACTORS_3
        ).addPosition(x, y
        ).addText("", null
        ).addResource("enemy3", null, false)



