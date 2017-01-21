[indent=4]
uses o2d.data
uses o2d.resources

namespace o2d

    class SceneLoader : Object
        
        prop readonly rm: ResourceManager
        prop readonly sceneVO: SceneVO

        construct()
            _rm = new ResourceManager()
            rm.initAllResources()
            print "SceneLoader initialized"

        def loadScene(sceneName: string): SceneVO
            _sceneVO = rm.getSceneVO(sceneName)
            // print "sceneName = %s", sceneName
            // print _sceneVO.to_string()
            return _sceneVO

        def loadVoFromLibrary(libraryName: string): CompositeItemVO
            var projectInfoVO = rm.getProjectVO()
            var compositeItemVO = projectInfoVO.libraryItems[libraryName]
            return compositeItemVO

