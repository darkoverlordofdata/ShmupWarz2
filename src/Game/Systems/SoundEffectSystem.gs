[indent=4]
uses sdx
uses sdx.audio
uses Entitas

namespace ShmupWarz

    class SoundEffectSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        game : GameScene
        world : World
        group : MatchGroup
        pew : Sound
        asplode : Sound
        smallasplode : Sound

        construct(game : GameScene)
            this.game = game

        def setWorld(world:World)
            this.world = world

        def initialize()
            group = MatchAllOf(world, {Component.SoundEffect})
            pew = Sdx.audio.newSound(Sdx.files.resource("sounds/pew.wav"))
            asplode = Sdx.audio.newSound(Sdx.files.resource("sounds/asplode.wav"))
            smallasplode = Sdx.audio.newSound(Sdx.files.resource("sounds/smallasplode.wav"))

        def execute()
            for var entity in group
                case entity.soundEffect.effect
                    when 0  //Effect.PEW
                        pew.play()
                    when 1  //Effect.ASPLODE
                        asplode.play()
                    when 2  //Effect.SMALLASPLODE
                        smallasplode.play()

                //entity.removeSoundEffect()


