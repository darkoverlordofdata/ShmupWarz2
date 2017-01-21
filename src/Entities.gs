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


    def createEntity(name:string): Entity
        //print "createEntity::%s %d - %s", name, O2dLib.getLayer(name), O2dLib.getResource(name)
        return (Entity)World.instance.createEntity(name)

    def prefab(name: string, x: double=0, y: double=0, centered :bool=false): Entity
        return createEntity(name
            ).addPosition(x, y
            ).addLayer(O2dLib.getLayer(name)
            ).addResource(O2dLib.getResource(name), null, centered)

    /**
    *  Create Background
    */
    def createBackground() : IEntity
        return prefab("background", 0, 0, true
        ).addScale(2,1
        ).setActive(true)

    /**
    *  Create Player
    */
    def createPlayer() : IEntity

        // defined in overlap2d in project.libraryItem["player"]
        // var o = project.libraryItem["player"]
        // look in pack.png at rect(o.x, o.y. o.width, o.height)
        //

        return prefab("player", Sdx.graphics.width/2, Sdx.graphics.height-80
            ).setPlayer(true
            ).addBounds(43
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

        return prefab("bullet", x, y
            ).setBullet(true
            ).addHealth(1.5, 1.5
            ).addVelocity(0, -800
            ).addTint(0xAD, 0xFF, 0x2F, 255
            ).addColorTween(r, m, s, g, m, s, b, m, s, a, m, s, true, true, true, true, true
            ).addBounds(5
            ).addExpires(1
            ).addSoundEffect(Effect.PEW
            ).setActive(true)

    /**
    *  Create Particle
    */
    def createParticle(x : double, y : double) : IEntity
        var radians = World.random.next_double() * Tau
        var magnitude = World.random.int_range(0, 200)
        var velocityX = magnitude * Math.cos(radians)
        var velocityY = magnitude * Math.sin(radians)
        var scale = World.random.double_range(0.1, 1.0)

        return prefab("particle", x, y
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

        return prefab("explosion", x, y
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

        return prefab("bang", x, y
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
        return prefab("enemy1", x, y
            ).setEnemy(true
            ).addBounds(20
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
        return prefab("enemy2", x, y
            ).setEnemy(true
            ).addBounds(40
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
        return prefab("enemy3", x, y
            ).setEnemy(true
            ).addBounds(70
            ).addHealth(60, 60
            ).addVelocity(0, 20
            ).addText("", null
            ).setActive(true)

