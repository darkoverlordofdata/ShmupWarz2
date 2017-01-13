[indent=4]
/**
 * CompisiteActor.gs
 *
 * 
 *
 */
uses Gee
uses Bosco
uses Bosco.UI
uses Bosco.Geo
uses Overlap2D.Data

namespace Bosco.O2d

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
            

    class CoreActorData
        prop id: string
        prop tags: ArrayList of string
        prop layerIndex: int
        //prop customVars: CustomVariables

    interface IResourceRetriever : Object
        def abstract getSpriteAnimation(name: string): TextureAtlas
        def abstract getSceneVO(sceneName: string): SceneVO 
        def abstract getProjectVO(): ProjectInfoVO 
        def abstract getLoadedResolution(): ResolutionEntryVO

    interface BuiltItemHandler : Object
        def abstract onItemBuild(item: Actor)
        class static Default : BuiltItemHandler
            def onItemBuild(item: Actor)
                if item isa CompositeActor
                    var data = (CoreActorData) item.userObject
                    if data != null && data.tags != null && data.tags.contains("button")
                        item.addListener(new ButtonClickListener())


    class CompositeActor : Group
        ir: IResourceRetriever
        pixelsPerWU: double
        resMultiplier: double
        vo: CompositeItemVO
        indexes: dict of int, Actor
        layerMap: dict of string, LayerItemVO

        construct(vo: CompositeItemVO, ir: IResourceRetriever)
            this.builder(vo, ir, new BuiltItemHandler.Default())

        construct builder(vo: CompositeItemVO, ir: IResourceRetriever, itemHandler: BuiltItemHandler, isRoot:bool=true)
            this.vo = vo
            this.ir = ir

            pixelsPerWU = ir.getProjectVO().pixelToWorld
            var resolutionEntryVO = ir.getLoadedResolution()
            resMultiplier = resolutionEntryVO.getMultiplier(ir.getProjectVO().originalResolution)
            makeLayerMap(vo)
            build(vo, itemHandler, isRoot)

        def makeLayerMap(vo: CompositeItemVO)
            pass

        def build(vo: CompositeItemVO, itemHandler: BuiltItemHandler, isRoot: bool)
            pass

