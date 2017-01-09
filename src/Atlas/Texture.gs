[indent=4]
uses Gee

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
            data = SDLImage.load(_path)

        def setFilter(minFilter: int, magFilter: int)
            pass

        def setWrap(u: int, v: int)
            pass
