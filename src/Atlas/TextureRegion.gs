[indent=4]
uses Gee

namespace ShmupWarz

    class TextureRegion : Object
        prop texture: Texture
        u: double
        v: double
        u2: double
        v2: double
        regionWidth: int
        regionHeight: int

        construct(texture: Texture, x: double, y: double, width: double, height: double)
            _texture = texture
            setRegion(x, y, width, height)

        def setRegion(x: double, y: double, width: double, height: double)
            pass

        def flip(x: bool, y:bool)
            pass
