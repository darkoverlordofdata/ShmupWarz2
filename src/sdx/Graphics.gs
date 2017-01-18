[indent=4]
/**
 * Graphics.gs
 *
 * Author: 
 *      bruce davidson
 */

namespace sdx

    class Graphics : Object

        prop deltaTime: float
        prop readonly width: int
        prop readonly height: int
        prop readonly scale: double
        prop readonly pixelFactor: double
                    
        construct()
            _width = 320
            _height = 480
            _scale = 1.0
            _pixelFactor = 1.0

