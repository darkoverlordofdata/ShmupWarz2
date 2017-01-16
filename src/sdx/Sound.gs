/**
 * Sound.gs
 *
 * Wrapper for Mix_Chunk.WAV sound effect
 *
 * Copyright 2016 Dark Overlord of Data
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the he MIT License (MIT).
 *
 * Author: 
 *      bruce davidson
 */
[indent=4]

uses SDL
uses SDLMixer
uses GLib

namespace sdx

    class Sound : Object

        chunk : Chunk

        /**
         *  load a sound effect from a file or resource
         *
         * @param path of the sprite file or resource
         * @return new Sound
         */
        def static fromFile(path: string) : Sound

            var fx = new Sound()

            if path.index_of("resource:///") == 0
                try
                    var ptr  = GLib.resources_lookup_data(path.substring(11), 0)
                    var rw = new RWops.from_mem((void*)ptr.get_data(), (int)ptr.get_size())
                    fx.chunk = new Chunk.WAV_RW(rw)
                except e: Error
                    print "Error loading resource: %s\n", e.message

            else
                fx.chunk = new Chunk.WAV(path)

            return fx

        
        /**
         *  Render (Play) the sound
         *
         * @param loops to repeat
         */
        def play(loops: int = 0)
            SDLMixer.play(-1, chunk, loops)

