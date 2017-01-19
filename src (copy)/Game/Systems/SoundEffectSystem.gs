[indent=4]
uses sdx
uses sdx.audio
uses Entitas

namespace ShmupWarz

    class SoundEffectSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _group: Group
        _game : GameScene
        _pew : Sound
        _asplode : Sound
        _smallasplode : Sound

        construct(game : GameScene)
            _game = game

        def setWorld(world:World)
            _group = world.getGroup(Matcher.AllOf({Component.SoundEffect}))

        def initialize()

            _pew = Sdx.audio.newSound(Sdx.files.resource("sounds/pew.wav"))
            _asplode = Sdx.audio.newSound(Sdx.files.resource("sounds/asplode.wav"))
            _smallasplode = Sdx.audio.newSound(Sdx.files.resource("sounds/smallasplode.wav"))

        def execute()
            for var entity in _group.getEntities()
                case getSoundEffect(entity).effect
                    when 0  //Effect.PEW
                        _pew.play()
                    when 1  //Effect.ASPLODE
                        _asplode.play()
                    when 2  //Effect.SMALLASPLODE
                        _smallasplode.play()

                //entity.removeSoundEffect()


