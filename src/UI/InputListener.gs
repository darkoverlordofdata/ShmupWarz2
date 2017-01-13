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

    class InputListener : Object implements EventListener
        prop static private tmpCoords: Vector2 = new Vector2()

        def handle(e: Event): bool
            if !e isa InputEvent do return false
            var event = e as InputEvent
            case event.getType()
                when InputEventType.keyDown
                    return keyDown(event, event.getKeyCode())
                
                when InputEventType.keyUp
                    return keyUp(event, event.getKeyCode())

                when InputEventType.keyTyped
                    return keyTyped(event, event.getKeyCode())

            event.toCoordinates(event.getListenerActor(), tmpCoords)

            case event.getType()
                when InputEventType.touchDown
                    return touchDown(event, tmpCoords.x, tmpCoords.y, event.getPointer(), event.getButton())
                when InputEventType.touchUp
                    touchUp(event, tmpCoords.x, tmpCoords.y, event.getPointer(), event.getButton())
                    return true
                when InputEventType.touchDragged
                    touchDragged(event, tmpCoords.x, tmpCoords.y, event.getPointer())
                    return true
                when InputEventType.mouseMoved
                    return mouseMoved(event, tmpCoords.x, tmpCoords.y)
                when InputEventType.scrolled
                    return scrolled(event, tmpCoords.x, tmpCoords.y, event.getScrollAmount())
                when InputEventType.enter
                    enter(event, tmpCoords.x, tmpCoords.y, event.getPointer(), event.getRelatedActor())
                    return false
                when InputEventType.exit
                    exit(event, tmpCoords.x, tmpCoords.y, event.getPointer(), event.getRelatedActor())
                    return false
            return false
        
        def touchDown(InputEvent event, float x, float y, int pointer, int button): bool
		    return false
        
        def touchUp (InputEvent event, float x, float y, int pointer, int button)
            pass
        
        def touchDragged (InputEvent event, float x, float y, int pointer)
            pass

        def mouseMoved (InputEvent event, float x, float y): bool
		    return false
        
        def enter (InputEvent event, float x, float y, int pointer, Actor fromActor)
            pass

        def exit (InputEvent event, float x, float y, int pointer, Actor toActor)
            pass

        def scrolled (InputEvent event, float x, float y, int amount): bool
    		return false
        
        def keyDown (InputEvent event, int keycode): bool
    		return false

        def keyUp (InputEvent event, int keycode): bool
    		return false

        def keyTyped (InputEvent event, char character): bool
    		return false
