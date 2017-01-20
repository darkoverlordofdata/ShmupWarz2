[indent=4]
uses sdx
uses Entitas

namespace ShmupWarz

    class EntitySpawningTimerSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        game: GameScene
        world: World
        timer1: double
        timer2: double
        timer3: double

        construct(game: GameScene)
            this.game = game

        def setWorld(world: World)
            this.world = world

        def initialize()
            timer1 = 2.0
            timer2 = 6.0
            timer3 = 12.0

        def execute()
            timer1 = spawnEnemy(timer1, Enemy.Enemy1)
            timer2 = spawnEnemy(timer2, Enemy.Enemy2)
            timer3 = spawnEnemy(timer3, Enemy.Enemy3)

        def spawnEnemy(t: double, enemy: Enemy): double
            var delta = t - Sdx.graphics.deltaTime
            result: double
            if delta < 0
                case enemy
                    when Enemy.Enemy1
                        createEnemy1()
                        result = 2.0
                    when Enemy.Enemy2
                        createEnemy2()
                        result = 6.0
                    when Enemy.Enemy3
                        createEnemy3()
                        result = 12.0
                    default
                        result = 0
            else
                result = delta
            return result


