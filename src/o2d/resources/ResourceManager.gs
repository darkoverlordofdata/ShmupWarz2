[indent=4]

namespace Overlap2D    

    
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
        prop readonly preparedSceneNames : array of string

        construct()
            _loadedSceneVOs = new dict of string, SceneVO
            _preparedSceneNames = new array of string[0]

        def initAllResources()
            pass

        def loadProjectVO(): ProjectInfoVO
            return null

        def loadSceneVO(): SceneVO
            return null
        
        def getProjectVO(): ProjectInfoVO
            return null

        def getSceneVO(name: string): SceneVO
            return null

