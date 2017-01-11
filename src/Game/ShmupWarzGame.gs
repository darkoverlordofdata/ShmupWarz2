[indent=4]
/**
 * MenuScene.gs
 *
 * 
 *
 */
uses Overlap2D
uses Bosco.UI

namespace ShmupWarz

    class ShmupWarzGame : Game

        prop readonly desktop: bool
        prop readonly scale: double
        prop readonly density: double
        prop menuScene: MenuScene
        prop gameScene: GameScene
        prop optionScene: MenuScene
        prop scoreScene: MenuScene
        
        construct(desktop: bool, scale: double)
            _density = 1
            _desktop = desktop
            _scale = scale

        def override create()
            menuGame()

        def menuGame() 
            var sceneLoader = new SceneLoader(RES)
            menuScene = new MenuScene(sceneLoader, new MenuUI(this, sceneLoader))
            optionScene = null
            scoreScene = null
            gameScene = null
            setScreen(menuScene)
        

        def optionsGame() 
            var sceneLoader = new SceneLoader(RES)
            menuScene = null
            optionScene = new MenuScene(sceneLoader, new OptionUI(this, sceneLoader))
            setScreen(optionScene)
            scoreScene = null
            gameScene = null
        

        def scoreGame() 
            var sceneLoader = new SceneLoader(RES)
            menuScene = null
            optionScene = null
            scoreScene = new MenuScene(sceneLoader, new ScoreUI(this, sceneLoader))
            setScreen(scoreScene)
            gameScene = null
        

        def playGame() 
            menuScene = null
            optionScene = null
            scoreScene = null
            gameScene = new GameScene(desktop, scale)
            setScreen(gameScene)
        

