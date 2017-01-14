[indent=4]
/**
 * TextureRegion.gs
 *
]*/
uses Gee
uses sdx.graphics

namespace sdx.graphics.s2d

    class TextureRegion : Object
        prop texture: Texture
        prop top: int
        prop left: int
        prop width: int
        prop height: int
        u: double
        v: double
        u2: double
        v2: double
        regionWidth: int
        regionHeight: int

        construct(texture: Texture, x: int, y: int, width: int, height: int)
            _texture = texture
            _top = x
            _left = y
            _width = width
            _height = height 
            setRegion(x, y, width, height)

        def setRegion(x: int, y: int, width: int, height: int)
            pass

        def flip(x: bool, y:bool)
            pass
