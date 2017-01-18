[indent=4]
/**
 * Audio.gs
 *
 * Author: 
 *      bruce davidson
 */
uses sdx.files
uses sdx.audio
namespace sdx

    class Audio : Object

        def newSound(file: FileHandle): Sound
            return new Sound(file)
            
    