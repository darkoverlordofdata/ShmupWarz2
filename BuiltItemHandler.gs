[indent=4]
/**
 * BuiltItemHandler.gs
 *
 * 
 *
 */
uses Gee
uses sdx
uses sdx.math
uses sdx.scenes.scene2d
uses o2d.data

namespace o2d.scene2d

    interface BuiltItemHandler : Object
        def abstract onItemBuild(item: Actor)
        class static Default : Object implements BuiltItemHandler
            def onItemBuild(item: Actor)
                if item isa CompositeActor
                    var data = (CoreActorData) item.userObject
                    if data != null && data.tags != null && data.tags.contains("button")
                        item.addListener(new ButtonClickListener())


