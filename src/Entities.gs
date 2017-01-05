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
        var entity = World.instance.createEntity("background")
        addPosition(entity, 0, 0)
        addScale(entity, 2, 1)
        addResource(entity, @"$RES/images/background.bmp", null, true)
        return entity

    /**
    *  Create Player
    */
    def createPlayer() : Entity

        // defined in overlap2d in project.libraryItem["player"]
        // var o = project.libraryItem["player"]
        // look in pack.png at rect(o.x, o.y. o.width, o.height)
        //

        var entity = World.instance.createEntity("player")
        setPlayer(entity, true)
        addBounds(entity, 43)
        addHealth(entity, 100, 100)
        addVelocity(entity, 0, 0)
        addLayer(entity, Layer.PLAYER)
        addPosition(entity, SCREEN_WIDTH/2, SCREEN_HEIGHT-80)
        addResource(entity, @"$RES/images/fighter.bmp", null, false)
        return entity
    /**
    *  Create Bullet
    */
    def createBullet(x : double, y : double) : Entity
        var r =(double) 0xad    // min red
        var g =(double) 0xaf    // min green
        var b =(double) 0x2f    // min blue
        var m = 255.0           // max color
        var s = 10.0            // speed
        var a = 255.0           // alpha
        var entity =  World.instance.createEntity("bullet")
        setBullet(entity, true)
        addHealth(entity, 1.5, 1.5)
        addPosition(entity, x, y)
        addVelocity(entity, 0, -800)
        addTint(entity, 0xAD, 0xFF, 0x2F, 255)
        addColorTween(entity, r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true)
        addBounds(entity, 5)
        addExpires(entity, 1)
        addLayer(entity, Layer.BULLET)
        addResource(entity, @"$RES/images/bullet.bmp", null, false)
        addSoundEffect(entity, Effect.PEW)
        return entity

    /**
    *  Create Particle
    */
    def createParticle(x : double, y : double) : Entity
        var radians = World.random.next_double() * Tau
        var magnitude = World.random.int_range(0, 200)
        var velocityX = magnitude * Math.cos(radians)
        var velocityY = magnitude * Math.sin(radians)
        var scale = World.random.double_range(0.1, 1.0)
        var entity = World.instance.createEntity("particle")
        addPosition(entity, x, y)
        addVelocity(entity, velocityX, velocityY)
        addExpires(entity, 1)
        addLayer(entity, Layer.PARTICLE)
        addScale(entity, scale, scale)
        addTint(entity, 0xFA, 0xFA, 0xD2, 255)
        addResource(entity, @"$RES/images/star.bmp", null, false)
        return entity

    /**
    *  Create Explosion
    */
    def createExplosion(x: double, y: double) : Entity
        var r = (double) 0xaa   // min red
        var g = (double) 0xaa   // min green
        var b = (double) 0xa2   // min blue
        var m = 255.0           // max color
        var s = 10.0            // speed
        var a = 255.0           // alpha
        var entity = World.instance.createEntity("explosion")
        addPosition(entity, x, y)
        addExpires(entity, 1.0)
        addLayer(entity, Layer.PARTICLE)
        addScale(entity, 0.5, 0.5)
        addSoundEffect(entity, Effect.ASPLODE)
        addScaleTween(entity, 0.001, 0.5, -3, false, true)
        addTint(entity, 0xFA, 0xFA, 0xD2, 255)
        addColorTween(entity, r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true)
        addResource(entity, @"$RES/images/explosion.bmp", null, false)
        return entity

    /**
    *  Create Small Explosion
    */
    def createBang(x: double, y: double) : Entity
        var r = (double) 0xae   // min red
        var g = (double) 0xa8   // min green
        var b = (double) 0xaa   // min blue
        var m = 255.0           // max color
        var s = 10.0            // speed
        var a = 255.0           // alpha
        var entity = World.instance.createEntity("explosion")
        addPosition(entity, x, y)
        addExpires(entity, 1.0)
        addLayer(entity, Layer.PARTICLE)
        addScale(entity, 1.0, 1.0)
        addSoundEffect(entity, Effect.SMALLASPLODE)
        addScaleTween(entity, 0.001, 1.0, -3, false, true)
        addTint(entity, 0xEE, 0xE8, 0xAA, 255)
        addColorTween(entity, r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true)
        addResource(entity, @"$RES/images/bang.bmp", null, false)
        return entity

    /**
    *  Create Small Enemy
    */
    def createEnemy1() : Entity
        var x = World.random.int_range(0, SCREEN_WIDTH)
        var y = SCREEN_HEIGHT/2 - 200
        var entity = World.instance.createEntity("enemy1")
        setEnemy(entity, true)
        addBounds(entity, 20)
        addHealth(entity, 10, 10)
        addVelocity(entity, 0, 40)
        addLayer(entity, Layer.ACTORS_1)
        addPosition(entity, x, y)
        addText(entity, "", null)
        addResource(entity, @"$RES/images/enemy1.bmp", null, false)
        return entity


    /**
    *  Create Medium Sized Enemy
    */
    def createEnemy2() : Entity
        var x = World.random.int_range(0, SCREEN_WIDTH)
        var y = SCREEN_HEIGHT/2 - 100
        var entity = World.instance.createEntity("enemy2")
        setEnemy(entity, true)
        addBounds(entity, 40)
        addHealth(entity, 20, 20)
        addVelocity(entity, 0, 30)
        addLayer(entity, Layer.ACTORS_2)
        addPosition(entity, x, y)
        addText(entity, "", null)
        addResource(entity, @"$RES/images/enemy2.bmp", null, false)
        return entity


    /**
    *  Create Large Enemy
    */
    def createEnemy3() : Entity
        var x = World.random.int_range(0, SCREEN_WIDTH)
        var y = SCREEN_HEIGHT/2 - 50
        var entity = World.instance.createEntity("enemy3")
        setEnemy(entity, true)
        addBounds(entity, 70)
        addHealth(entity, 60, 60)
        addVelocity(entity, 0, 20)
        addLayer(entity, Layer.ACTORS_3)
        addPosition(entity, x, y)
        addText(entity, "", null)
        addResource(entity, @"$RES/images/enemy3.bmp", null, false)
        return entity



