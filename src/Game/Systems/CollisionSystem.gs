[indent=4]
uses GLib
uses GLib.Math
uses Entitas
uses sdx

namespace ShmupWarz

    class CollisionSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        game: GameScene
        world: World
        bullets: Match
        enemies: Match
        factory: Entities

        construct(game: GameScene)
            this.game = game
            factory = game.factory

        def setWorld(world: World)
            this.world = world

        def initialize()
            bullets = MatchAllOf(world, {Component.Bullet})
            enemies = MatchAllOf(world, {Component.Enemy})


        def execute()
            for var entityA in bullets
                for var entityB in enemies
                    if collisionExists(entityA, entityB)
                        handleCollision(entityA, entityB)


        def collisionExists(e1: Entity, e2: Entity): bool
            if e1 == null || e2 == null do return false

            var p1 = e1.position
            var p2 = e2.position
            var b1 = e1.bounds
            var b2 = e2.bounds
            var a = p1.x - p2.x
            var b = p1.y - p2.y

            return Math.sqrt(a * a + b * b) - (b1.radius) < (b2.radius)

        def handleCollision(bullet: Entity, ship: Entity)
            var bp = bullet.position
            var health = ship.health
            var position = ship.position
            var x = bp.x
            var y = bp.y

            factory.createBang(x, y)
            var i = 5
            while --i > 0 do factory.createParticle(x, y)

            if !bullet.isDestroy do bullet.setDestroy(true)
            health.health = health.health - bullet.health.health
            if health.health < 0
                if !ship.isDestroy do ship.setDestroy(true)
                factory.createExplosion(position.x, position.y)


