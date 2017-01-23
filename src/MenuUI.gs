/**
 * Screen.gs
 *
 * 
 *
 */
[indent=4]
uses sdx
uses sdx.scenes.scene2d
uses sdx.scenes.scene2d.utils
uses o2d
uses o2d.data
uses o2d.scene2d

namespace ShmupWarz

    class MenuListener : ClickListener
        game: ShmupWarzGame
        option: string
        construct(game: ShmupWarzGame, option: string)
            this.game = game
            this.option = option
        def clicked(event: InputEvent, x:double, y:double)
            case option
                when "play"
                    pass//game.play()
                when "score"
                    pass//game.score()
                when "option"
                    pass//game.option()



    class MenuUI: Stage
        prop game: ShmupWarzGame
        prop sceneLoader: SceneLoader

        construct(game: ShmupWarzGame, sceneLoader: SceneLoader)

            sceneLoader.loadScene("MenuScene") //, new FitViewport(350f, 480f))
            var pixelFactor = game.desktop ? game.scale : game.density > 1 ? 2 : 1
            var playButtonVo = sceneLoader.loadVoFromLibrary("playButton")
            var playButtonActor = new CompositeActor(playButtonVo, sceneLoader.rm)
            var col = (width-playButtonActor.width*pixelFactor)/2
            var row = (pixelFactor-1)*100-200*pixelFactor
            addActor(playButtonActor)
            playButtonActor.setX(col)
            playButtonActor.setY(row+220*2*pixelFactor)
            playButtonActor.setScale(pixelFactor)
            playButtonActor.addListener(new MenuListener(game, "play"))

            var scoreButtonVo  = sceneLoader.loadVoFromLibrary("scoreButton")
            var scoreButtonActor = new CompositeActor(scoreButtonVo, sceneLoader.rm)
            addActor(scoreButtonActor)
            scoreButtonActor.setX(col)
            scoreButtonActor.setY(row+180*2*pixelFactor)
            scoreButtonActor.setScale(pixelFactor)
            scoreButtonActor.addListener(new MenuListener(game, "score"))

            var optionButtonVo  = sceneLoader.loadVoFromLibrary("optionButton")
            var optionButtonActor = new CompositeActor(optionButtonVo, sceneLoader.rm)
            addActor(optionButtonActor)
            optionButtonActor.setX(col)
            optionButtonActor.setY(row+140*2*pixelFactor)
            optionButtonActor.setScale(pixelFactor)
            optionButtonActor.addListener(new MenuListener(game, "option"))

            //   Gdx.input.setInputProcessor(this)

