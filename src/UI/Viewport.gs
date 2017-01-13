[indent=4]
/**
 * Viewport.gs
 *
 * 
 *
 */
uses Gee
uses Bosco
uses Bosco.Geo

namespace Bosco.UI

    class Viewport
        worldWidth: double
        worldHeight: double
        screenX: int
        screenY: int
        screenWidth: int
        screenHeight: int


        def update(screenWidth: int, screenHeight: int)
            this.screenWidth = screenWidth
            this.screenHeight = screenHeight

            
