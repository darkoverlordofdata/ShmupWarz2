[indent=4]
uses GLib
uses GLib.Math
uses Entitas
uses sdx

namespace ShmupWarz

    class CollisionSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _world : World
        _game : GameScene
        _bullets : Group
        _enemies : Group

        construct(game : GameScene)
            _game = game

        def setWorld(world : World)
            _world = world

        def initialize()
            _bullets = _world.getGroup(Matcher.AllOf({Component.Bullet}))
            _enemies = _world.getGroup(Matcher.AllOf({Component.Enemy}))


        def execute()
            for var entityA in _bullets.getEntities()
                for var entityB in _enemies.getEntities()
                    if collisionExists((ShmupWarz.Entity)entityA, (ShmupWarz.Entity)entityB)
                        handleCollision((ShmupWarz.Entity)entityA, (ShmupWarz.Entity)entityB)


        def collisionExists(e1: ShmupWarz.Entity, e2: ShmupWarz.Entity): bool
            if e1 == null || e2 == null do return false

            var p1 = e1.position
            var p2 = e2.position
            var b1 = e1.bounds
            var b2 = e2.bounds
            var a = p1.x - p2.x
            var b = p1.y - p2.y

            return Math.sqrt(a * a + b * b) - (b1.radius) < (b2.radius)

        def handleCollision(bullet: ShmupWarz.Entity, ship: ShmupWarz.Entity)
            var bp = bullet.position
            var health = ship.health
            var position = ship.position
            var x = bp.x
            var y = bp.y

            createBang(x, y)
            var i = 5
            while --i > 0 do createParticle(x, y)

            if !bullet.isDestroy do bullet.setDestroy(true)
            health.health = health.health - bullet.health.health
            if health.health < 0
                if !ship.isDestroy do ship.setDestroy(true)
                createExplosion(position.x, position.y)


