[indent=4]
uses Overlap2D.Data
uses Overlap2D.Resources

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
            print projectInfoVO.to_string()
            for var item in projectInfoVO.libraryItems.values
                print "%f, %f, %f, %f", item.x, item.y, item.width, item.height
            // for var n=0 to (projectInfoVO.libraryItems.size-1)
            //     print "%d) %s", n,  projectInfoVO.libraryItems[n].itemName

            var compositeItemVO = projectInfoVO.libraryItems[libraryName]
            return compositeItemVO
