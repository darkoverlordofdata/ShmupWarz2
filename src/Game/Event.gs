[indent=4]
/**
 * Event.gs
 *
 * 
 *
 */
uses Bosco

namespace Bosco.UI

    interface EventListener
        def abstract handle(event: Event)

    class Event: Object implements Poolable
        stage: private Stage
        targetActor: private Actor
        listenerActor: private Actor
        capture: private bool
        bubbles: private bool
        handled: private bool
        stopped: private bool
        cancelled: private bool

        def handle()
            handled = true

        def cencel()
            cancelled = true
            stopped = true
            handled = true

        def stop()
            stopped = true

        def reset()
            stage = null
            targetActor = null
            listenerActor = null
            capture = false
            bubbles = true
            handled = false
            stopped = false
            cancelled = false


        def getTarget(): Actor
            return targetActor

        def setTarget(targetActor:Actor)
            this.targetActor = targetActor

        def getListenerActor()
            return listenerActor

        def setListenerActor(listenerActor:Actor)
            this.listenerActor = listenerActor

        def getBubbles()
            return bubbles

        def setBubbles(bubbles: bool)
            this.bubbles = bubbles

        def isHandled(): bool
            return handled

        def isStopped(): bool
            return stopped

        def isCancelled(): bool
            return cancelled

        def setCapture(capture:bool)
            this.capture = capture

        def isCapture(): bool
            return capture

        def setStage(stage: Stage)
            this.stage = stage

        def getStage(): Stage
            return stage
            