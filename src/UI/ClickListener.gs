[indent=4]
/**
 * Event.gs
 *
 * 
 *
 */
uses Gee
uses Bosco
uses Bosco.Geo

namespace Bosco.UI

    class ClickListener : InputListener

        prop static visualPressedDuration: double = 0.1

        tapSquareSize: double = 14
        touchDownX: double = -1
        touchDownY: double = -1
        pressedPointer: int = -1
        pressedButton: int = -1
        buton: int 
        pressed: bool
        over: bool
        cancelled: bool
        visualPressedTime: int
        tapCountInterval: int
        tapCount: int
        lastTapTime: int

        construct()
            pass

        construct button(button: int)
            this.button = button


        def touchDown(InputEvent event, float x, float y, int pointer, int button): bool
		    return false
        
        def touchUp (InputEvent event, float x, float y, int pointer, int button)
            pass
        
        def touchDragged (InputEvent event, float x, float y, int pointer)
            pass
        
        def enter (InputEvent event, float x, float y, int pointer, Actor fromActor)
            pass

        def exit (InputEvent event, float x, float y, int pointer, Actor toActor)
            pass



