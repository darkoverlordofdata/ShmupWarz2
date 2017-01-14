[indent=4]
/**
 * Texture.gs
 *
 * Copyright 2016 Dark Overlord of Data
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the he MIT License (MIT).
 *
 * Author: 
 *      bruce davidson
 */
uses Gee
uses SDL
uses SDLImage
uses SDLTTF
uses GLib

namespace sdx.graphics

    class Texture : Object
        data: Video.Surface
        prop path: string
        prop width: int
            get
                return data.w
        prop height: int
            get
                return data.h
        construct(path: string)
            _path = path
            if _path.index_of("resource:///") == 0
                try
                    var ptr  = GLib.resources_lookup_data(_path.substring(11), 0)
                    var rw = new RWops.from_mem((void*)ptr.get_data(), (int)ptr.get_size())
                    data = new Video.Surface.from_bmp_rw(rw)

                except e: Error
                    data = null
                    print "Error loading resource: %s\n", e.message

            else
                data = SDLImage.load(_path)

        def setFilter(minFilter: int, magFilter: int)
            pass

        def setWrap(u: int, v: int)
            pass
