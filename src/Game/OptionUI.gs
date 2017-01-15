[indent=4]
/**
 * Screen.gs
 *
 * 
 *
 */
//uses Overlap2D
uses sdx
uses sdx.scenes.scene2d
uses sdx.scenes.scene2d.utils
uses o2d
uses o2d.data
uses o2d.scene2d

namespace ShmupWarz

    class OptionListener : ClickListener
        game: ShmupWarzGame
        construct(game: ShmupWarzGame)
            this.game = game
        def clicked(event: InputEvent, x:double, y:double)
            pass//game.menuGame()

    class OptionUI: Stage
        prop game: ShmupWarzGame
        prop sceneLoader: SceneLoader

        construct(game: ShmupWarzGame, sceneLoader: SceneLoader)
            sceneLoader.loadScene("OptionsScene") //, new FitViewport(350f, 480f))

              var backButtonVo = sceneLoader.loadVoFromLibrary("backButton")
              var backButtonActor = new CompositeActor(backButtonVo, sceneLoader.rm)
              var pixelFactor = 1// game.desktop ? game.scale : (Gdx.graphics.getDensity > 1 ? 2 else 1
              // var pixelFactor = if (Gdx.graphics.getDensity > 1f) 2f else 1f
              var col = (width-backButtonActor.width*pixelFactor)/2
              var row = (pixelFactor-1)*100-200*pixelFactor

              addActor(backButtonActor)
              backButtonActor.setX(col)
              backButtonActor.setY(row+110*2*pixelFactor)
              backButtonActor.setScale(pixelFactor)
              backButtonActor.addListener(new OptionListener(game))

            //   Gdx.input.setInputProcessor(this)
