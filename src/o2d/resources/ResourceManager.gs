[indent=4]
uses sdx.graphics.s2d
uses o2d.data

namespace o2d.resources

    
    class ResourceManager : Object implements IDataLoader, IAssetLoader, IResourceRetriever

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

        def loadSceneVO(sceneName: string): SceneVO
            // print "loadSceneVO %s", @"$uri/scenes/$sceneName.dt"
            var stream = readStream(@"$uri/scenes/$sceneName.dt")
            var json = loadJson(stream)
            var sceneVO = new SceneVO(json)
            loadedSceneVOs[sceneName] = sceneVO
            // print "Loaded %s", sceneName
            return sceneVO
        
        def loadProjectVO(): ProjectInfoVO
            var stream = readStream(@"$uri/project.dt")
            var json = loadJson(stream)
            _projectVO = new ProjectInfoVO(json)
            //print "Loaded project"
            var str = _projectVO.to_string()
            return _projectVO

        def loadAtlasPack()
            pass

        def loadParticleEffects()
            pass
            
        def loadSpriteAnimations()
            pass
            
        def loadSpineAnimations()
            pass
            
        def loadFonts()
            pass
            
        def loadShaders()
            pass
            
        def loadSpriterAnimations()
            pass
            
        def getTextureRegion(name: string): TextureRegion
            return null

        def getSpriteAnimation(name: string): TextureAtlas
            return null

        def getSceneVO(name: string): SceneVO
            return loadedSceneVOs[name]

        def getProjectVO(): ProjectInfoVO
            return _projectVO

        def getLoadedResolution(): ResolutionEntryVO
            return null


