[indent=4]
uses Overlap2D.Data

namespace Overlap2D.Resources

    
    class ResourceManager : Object

        const packResolutionName: string = "orig"
        const scenesPath: string = "scenes"
        const particleEffectsPath: string = "particles"
        const spriteAnimationsPath: string = "sprite_animations"
        const spriterAnimationsPath: string = "spriter_animations"
        const spineAnimationsPath: string = "spine_animations"
        const fontsPath: string = "freetypefonts"
        const shadersPath: string = "shaders"

        prop readonly projectVO : ProjectInfoVO
        prop readonly loadedSceneVOs : dict of string, SceneVO
        prop readonly preparedSceneNames : list of string
        prop readonly uri: string

        construct(uri: string)
            _uri = uri
            _loadedSceneVOs = new dict of string, SceneVO
            _preparedSceneNames = new list of string

        /**
        * Easy use loader
        * Iterates through all scenes and schedules all for loading
        * Prepares all the assets to be loaded that are used in scheduled scenes
        * finally loads all the prepared assets
        */
        def initAllResources()
            loadProjectVO()
            for var scene in _projectVO.scenes
                loadSceneVO(scene.sceneName)
                scheduleScene(scene.sceneName)
            //prepareAssetsToLoad()
            //loadAssets()
                
        /**
        * Schedules scene for later loading
        * if later prepareAssetsToLoad function will be called it will only prepare assets that are used in scheduled scene
        *
        * @param name - scene file name without ".dt" extension
        */
        def scheduleScene(name: string)
            if (name in loadedSceneVOs)
                preparedSceneNames.add(name)

        def loadProjectVO(): ProjectInfoVO
            var stream = readStream(@"$uri/project.dt")
            var json = loadJson(stream)
            _projectVO = new ProjectInfoVO(json)
            return _projectVO

        def loadSceneVO(sceneName: string): SceneVO
            var stream = readStream(@"$uri/scenes/$sceneName.dt")
            var json = loadJson(stream)
            var sceneVO = new SceneVO(json)
            loadedSceneVOs[sceneName] = sceneVO
            return sceneVO
        
        def getProjectVO(): ProjectInfoVO
            return _projectVO

        def getSceneVO(name: string): SceneVO
            return loadedSceneVOs[name]

