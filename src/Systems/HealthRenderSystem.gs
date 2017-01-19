[indent=4]
uses
    Bosco
    Entitas

namespace shmupwarz 


    class HealthRenderSystem : Object implements  ISetWorld,  IExecuteSystem,  IInitializeSystem, ISystem
        _game : Game
        _world: World

        construct(game : Game)
            _game = game



        def setWorld(world: World)
            _world = world


        def execute()
            return


        def initialize()
            return


