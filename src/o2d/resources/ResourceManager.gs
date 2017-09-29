[indent=4]


uses sdx
uses sdx.files
uses sdx.graphics.s2d
uses sdx.utils
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
        prop readonly loadedSceneVOs : dict of string, SceneVO = new dict of string, SceneVO
        prop readonly preparedSceneNames : list of string = new list of string
        prop readonly mainPack: TextureAtlas


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
            loadAssets()
                
        /**
        * Schedules scene for later loading
        * if later prepareAssetsToLoad function will be called it will only prepare assets that are used in scheduled scene
        *
        * @param name - scene file name without ".dt" extension
        */
        def scheduleScene(name: string)
            if name in loadedSceneVOs
                preparedSceneNames.add(name)

        def loadSceneVO(sceneName: string): SceneVO
            var file = Sdx.files.resource(scenesPath + Files.separator + sceneName + ".dt")
            var json = JSON.parse(file.read())
            var sceneVO = new SceneVO(json)
            loadedSceneVOs[sceneName] = sceneVO
            return sceneVO
        
        def loadProjectVO(): ProjectInfoVO
            var file = Sdx.files.resource("project.dt")
            var json = JSON.parse(file.read())
            _projectVO = new ProjectInfoVO(json)
            return _projectVO

        def loadAssets()
            loadAtlasPack()
            loadParticleEffects()
            loadSpineAnimations()
            loadSpriteAnimations()
            loadSpriterAnimations()
            loadFonts()
            loadShaders()


        def loadAtlasPack()
            var packFile = Sdx.files.resource(packResolutionName + Files.separator + "pack.atlas")
            if !packFile.exists()
                print "Unable to find file %s", packFile.getPath()
                return
            _mainPack = new TextureAtlas.file(packFile)

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
            return mainPack.findRegion(name)

        def getSpriteAnimation(name: string): TextureAtlas
            return null

        def getSceneVO(name: string): SceneVO
            return loadedSceneVOs[name]

        def getProjectVO(): ProjectInfoVO
            return _projectVO

        def getLoadedResolution(): ResolutionEntryVO
            if packResolutionName == "orig"
                return getProjectVO().originalResolution
            
            return getProjectVO().getResolution(packResolutionName)


