[indent=4]
uses SDL
uses SDLMixer
uses Bosco
uses Entitas

namespace ShmupWarz

    class SoundEffectSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _group: Group
        _game : Game
        _pew : Sound
        _asplode : Sound
        _smallasplode : Sound

        construct(game : Game)
            _game = game

        def setWorld(world:World)
            _group = world.getGroup(Matcher.AllOf({Component.SoundEffect}))

        def initialize()

            _pew = Sound.fromFile(@"$RES/sounds/pew.wav")
            _asplode = Sound.fromFile(@"$RES/sounds/asplode.wav")
            _smallasplode = Sound.fromFile(@"$RES/sounds/smallasplode.wav")

        def execute()
            for var entity in _group.getEntities()
                case getSoundEffect(entity).effect
                    when 0  //Effect.PEW
                        _pew.play()
                    when 1  //Effect.ASPLODE
                        _asplode.play()
                    when 2  //Effect.SMALLASPLODE
                        _smallasplode.play()



