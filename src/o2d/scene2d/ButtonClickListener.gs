/**
 * ButtonClickListener.gs
 *
 * 
 *
 */
[indent=4]
uses Gee
uses sdx
uses sdx.math
uses sdx.scenes.scene2d
uses sdx.scenes.scene2d.utils
uses o2d.data

namespace o2d.scene2d

    class ButtonClickListener : ClickListener
        def touchDown(event: InputEvent, x:int, y:int, pointer: int, button: int): bool
            var compositeActor = event.getListenerActor() as CompositeActor
            compositeActor.setLayerVisibility("normal", false)
            compositeActor.setLayerVisibility("pressed", true)
            return true

        def touchUp(event: InputEvent, x:int, y:int, pointer: int, button: int)
            var compositeActor = event.getListenerActor() as CompositeActor
            compositeActor.setLayerVisibility("normal", true)
            compositeActor.setLayerVisibility("pressed", false)
            