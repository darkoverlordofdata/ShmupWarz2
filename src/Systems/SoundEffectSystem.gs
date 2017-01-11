[indent=4]
uses
    SDL
    SDLMixer
    Bosco
    Entitas

namespace ShmupWarz

    class SoundEffectSystem : Object implements ISystem, ISetWorld, IInitializeSystem, IExecuteSystem
        _group: Group
        _game : Shmup
        _pew : Sound
        _asplode : Sound
        _smallasplode : Sound

        construct(game : Shmup)
            _game = game

        def setWorld(world:World)
            _group = world.getGroup(Matcher.AllOf({Component.SoundEffect}))

        def initialize()

            // try
            //     var path0 = @"$RES/sounds/pew.wav"
            //     var ptr0  = GLib.resources_lookup_data(path0.substring(11), 0)
            //     var rw0 = new RWops.from_mem((void*)ptr0.get_data(), (int)ptr0.get_size())
            //     _pew = new Chunk.WAV_RW(rw0)
        
            //     var path1 = @"$RES/sounds/asplode.wav"
            //     var ptr1  = GLib.resources_lookup_data(path1.substring(11), 0)
            //     var rw1 = new RWops.from_mem((void*)ptr1.get_data(), (int)ptr1.get_size())
            //     _asplode = new Chunk.WAV_RW(rw1)

            //     var path2 = @"$RES/sounds/smallasplode.wav"
            //     var ptr2  = GLib.resources_lookup_data(path2.substring(11), 0)
            //     var rw2 = new RWops.from_mem((void*)ptr2.get_data(), (int)ptr2.get_size())
            //     _smallasplode = new Chunk.WAV_RW(rw2)

            // except e: Error
            //     print "Error loading resource: %s\n", e.message

            _pew = Sound.fromFile(@"$RES/sounds/pew.wav")
            _asplode = Sound.fromFile(@"$RES/sounds/asplode.wav")
            _smallasplode = Sound.fromFile(@"$RES/sounds/smallasplode.wav")

        def execute()
            for var entity in _group.getEntities()
                case getSoundEffect(entity).effect
                    when 0  //Effect.PEW
                        //SDLMixer
                        _pew.play()
                    when 1  //Effect.ASPLODE
                        //SDLMixer.play(-1, _asplode)
                        _asplode.play()
                    when 2  //Effect.SMALLASPLODE
                        //SDLMixer.play(-1, _smallasplode)
                        _smallasplode.play()



