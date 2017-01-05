[indent=4]

namespace Overlap2D

    class SceneLoader : Object
        
        prop readonly rm: ResourceManager
        prop readonly sceneVO: SceneVO
        prop readonly name: string

        construct()
            _rm = new ResourceManager()
            rm.initAllResources()
            //initSceneLoader()

        def loadScene(sceneName: string)
            _name = sceneName
            _sceneVO = rm.getSceneVO(sceneName)

        def loadVoFromLibrary(libraryName: string) : CompositeItemVO
            var projectInfoVO = rm.getProjectVO()
            var compositeItemVO = projectInfoVO.libraryItems[libraryName]
            return compositeItemVO
