/**
 * MenuScene.gs
 *
 * 
 *
 */
[indent=4]
uses sdx
uses sdx.scenes.scene2d
uses o2d
uses o2d.data
uses o2d.scene2d

def main(args: array of string)
    var game = new ShmupWarz.ShmupWarzGame(true, 1.0)
    game.run()
    
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
            super(800, 640, "resource:///darkoverlordofdata/shmupwarz")
            _density = 1
            _desktop = desktop
            _scale = scale
            defaultFont = "fonts/OpenDyslexic-Bold.otf"
            initPools()
            setApplicationListener(this)

        def override create()
            playGame()

        def menuGame() 
            var sceneLoader = new SceneLoader()
            menuScene = new MenuScene(sceneLoader, new MenuUI(this, sceneLoader))
            optionScene = null
            scoreScene = null
            gameScene = null
            setScreen(menuScene)
        
        def optionsGame() 
            var sceneLoader = new SceneLoader()
            menuScene = null
            optionScene = new MenuScene(sceneLoader, new OptionUI(this, sceneLoader))
            setScreen(optionScene)
            scoreScene = null
            gameScene = null
        

        def scoreGame() 
            var sceneLoader = new SceneLoader()
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
        

