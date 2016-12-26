/**
 * Entities.gs
 *
 * Entity factory
 *
 */
[indent=4]
uses Entitas
uses GLib
uses SDL

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

    /**
    *  Create Background
    */
    def createBackground() : Entity
        var e = World.instance.createEntity("background")
        addPosition(e, 0, 0)
        addScale(e, 2, 1)
        addResource(e, @"$RES/images/background.bmp", null, true)
        return e


    /**
    *  Create Player
    */
    def createPlayer() : Entity
        var e = World.instance.createEntity("player")
        setPlayer(e, true)
        addBounds(e, 43)
        addHealth(e, 100, 100)
        addVelocity(e, 0, 0)
        addLayer(e, Layer.PLAYER)
        addPosition(e, SCREEN_WIDTH/2, SCREEN_HEIGHT-80)
        addResource(e, @"$RES/images/fighter.bmp", null, false)
        return e
    /**
    *  Create Bullet
    */
    def createBullet(x : double, y : double) : Entity
        var r =(double) 0xad
        var g =(double) 0xaf
        var b =(double) 0x2f
        var m = 255.0
        var a = 255.0
        var s = 10.0
        var e =  World.instance.createEntity("bullet")
        setBullet(e, true)
        addHealth(e, 1.5, 1.5)
        addPosition(e, x, y)
        addVelocity(e, 0, -800)
        addTint(e, 0xAD, 0xFF, 0x2F, 255)
        addColorTween(e, r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true)
        addBounds(e, 5)
        addExpires(e, 1)
        addLayer(e, Layer.BULLET)
        addResource(e, @"$RES/images/bullet.bmp", null, false)
        addSoundEffect(e, Effect.PEW)
        return e

    /**
    *  Create Particle
    */
    def createParticle(x : double, y : double) : Entity
        var radians = World.random.next_double() * Tau
        var magnitude = World.random.int_range(0, 200)
        var velocityX = magnitude * Math.cos(radians)
        var velocityY = magnitude * Math.sin(radians)
        var scale = World.random.double_range(0.1, 1.0)
        var e = World.instance.createEntity("particle")
        addPosition(e, x, y)
        addVelocity(e, velocityX, velocityY)
        addExpires(e, 1)
        addLayer(e, Layer.PARTICLE)
        addScale(e, scale, scale)
        addTint(e, 0xFA, 0xFA, 0xD2, 255)
        addResource(e, @"$RES/images/star.bmp", null, false)
        return e

    /**
    *  Create Explosion
    */
    def createExplosion(x: double, y: double) : Entity
        var r =(double) 0xaa
        var g =(double) 0xaa
        var b =(double) 0xa2
        var m = 255.0
        var a = 255.0
        var s = 10.0
        var e = World.instance.createEntity("explosion")
        addPosition(e, x, y)
        addExpires(e, 1.0)
        addLayer(e, Layer.PARTICLE)
        addScale(e, 0.5, 0.5)
        addSoundEffect(e, Effect.ASPLODE)
        addScaleTween(e, 0.001, 0.5, -3, false, true)
        addTint(e, 0xFA, 0xFA, 0xD2, 255)
        addColorTween(e, r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true)
        addResource(e, @"$RES/images/explosion.bmp", null, false)
        return e

    /**
    *  Create Small Explosion
    */
    def createBang(x: double, y: double) : Entity
        var r =(double) 0xae
        var g =(double) 0xa8
        var b =(double) 0xaa
        var m = 255.0
        var a = 255.0
        var s = 10.0
        var e = World.instance.createEntity("explosion")
        addPosition(e, x, y)
        addExpires(e, 1.0)
        addLayer(e, Layer.PARTICLE)
        addScale(e, 1.0, 1.0)
        addSoundEffect(e, Effect.SMALLASPLODE)
        addScaleTween(e, 0.001, 1.0, -3, false, true)
        addTint(e, 0xEE, 0xE8, 0xAA, 255)
        addColorTween(e, r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true)
        addResource(e, @"$RES/images/bang.bmp", null, false)
        return e

    /**
    *  Create Small Enemy
    */
    def createEnemy1() : Entity
        var x = World.random.int_range(0, SCREEN_WIDTH)
        var y = SCREEN_HEIGHT/2 - 200
        var e = World.instance.createEntity("enemy1")
        setEnemy(e, true)
        addBounds(e, 20)
        addHealth(e, 10, 10)
        addVelocity(e, 0, 40)
        addLayer(e, Layer.ACTORS_1)
        addPosition(e, x, y)
        addText(e, "", null)
        addResource(e, @"$RES/images/enemy1.bmp", null, false)
        return e


    /**
    *  Create Medium Sized Enemy
    */
    def createEnemy2() : Entity
        var x = World.random.int_range(0, SCREEN_WIDTH)
        var y = SCREEN_HEIGHT/2 - 100
        var e = World.instance.createEntity("enemy2")
        setEnemy(e, true)
        addBounds(e, 40)
        addHealth(e, 20, 20)
        addVelocity(e, 0, 30)
        addLayer(e, Layer.ACTORS_2)
        addPosition(e, x, y)
        addText(e, "", null)
        addResource(e, @"$RES/images/enemy2.bmp", null, false)
        return e


    /**
    *  Create Large Enemy
    */
    def createEnemy3() : Entity
        var x = World.random.int_range(0, SCREEN_WIDTH)
        var y = SCREEN_HEIGHT/2 - 50
        var e = World.instance.createEntity("enemy3")
        setEnemy(e, true)
        addBounds(e, 70)
        addHealth(e, 60, 60)
        addVelocity(e, 0, 20)
        addLayer(e, Layer.ACTORS_3)
        addPosition(e, x, y)
        addText(e, "", null)
        addResource(e, @"$RES/images/enemy3.bmp", null, false)
        return e



