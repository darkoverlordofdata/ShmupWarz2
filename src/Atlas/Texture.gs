[indent=4]
uses Gee
uses SDL
uses SDLImage
uses SDLTTF
uses GLib

namespace ShmupWarz

    class Texture : Object
        data: SDL.Video.Surface
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
