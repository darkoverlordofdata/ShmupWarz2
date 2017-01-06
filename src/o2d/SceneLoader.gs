[indent=4]

namespace Overlap2D

    class SceneLoader : Object
        
        prop readonly rm: ResourceManager
        prop readonly sceneVO: SceneVO

        construct(uri: string)
            _rm = new ResourceManager(uri)
            rm.initAllResources()

        def loadScene(sceneName: string): SceneVO
            _sceneVO = rm.getSceneVO(sceneName)
            return _sceneVO

        def loadVoFromLibrary(libraryName: string) : CompositeItemVO
            var projectInfoVO = rm.getProjectVO()
            var compositeItemVO = projectInfoVO.libraryItems[libraryName]
            return compositeItemVO
