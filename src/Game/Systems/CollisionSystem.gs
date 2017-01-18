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
                    if collisionExists(entityA, entityB)
                        handleCollision(entityA, entityB)


        def collisionExists(e1: Entity, e2: Entity): bool
            var result = false

            if e1 == null || e2 == null do return result

            var p1 = getPosition(e1)
            var p2 = getPosition(e2)
            var b1 = getBounds(e1)
            var b2 = getBounds(e2)
            var a = p1.x - p2.x
            var b = p1.y - p2.y

            result = Math.sqrt(a * a + b * b) - (b1.radius) < (b2.radius)

            return result

        def handleCollision(bullet: Entity, ship: Entity)
            var bp = getPosition(bullet)
            var health = getHealth(ship)
            var position = getPosition(ship)
            var x = bp.x
            var y = bp.y

            createBang(x, y)
            var i = 5
            while --i > 0 do createParticle(x, y)

            if !isDestroy(bullet) do setDestroy(bullet, true)
            health.health = health.health - getHealth(bullet).health
            if health.health < 0
                if !isDestroy(ship) do setDestroy(ship, true)
                createExplosion(position.x, position.y)


