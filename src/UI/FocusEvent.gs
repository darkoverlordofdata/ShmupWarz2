[indent=4]
/**
 * Event.gs
 *
 * 
 *
 */
uses Bosco

namespace Bosco.UI

    class abstract FocusListener : Object implements EventListener

        def handle(e: Event): bool
            var event = e as FocusEvent
            if event != null
                case (event).getType()
                    when FocusEvent.FocusEventType.keyboard
                        keyboardFocusChanged(event, event.getTarget(), event.isFocused())
                    when FocusEvent.FocusEventType.scroll
                        scrollFocusChanged(event, event.getTarget(), event.isFocused())
            return false


        def abstract keyboardFocusChanged(event: FocusEvent, actor: Actor, focused: bool)

        def abstract scrollFocusChanged(event: FocusEvent, actor: Actor, focused: bool)

    class FocusEvent: Bosco.UI.Event implements Poolable
        focused: bool
        type: FocusEventType
        relatedActor: Actor

        enum static FocusEventType
            keyboard
            scroll

        def reset() 
            super.reset()
            relatedActor = null

        def isFocused(): bool   
            return focused

        def setFocused(focused: bool)
            this.focused = focused

        def getType(): FocusEventType
            return type

        def setType(focusType: FocusEventType)
            type = focusType

        def getRelatedActor(): Actor
            return relatedActor

        def setRelatedActor(relatedActor: Actor)
            this.relatedActor = relatedActor

