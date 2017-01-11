[indent=4]
/**
 * Screen.gs
 *
 * 
 *
 */
uses Overlap2D
uses Bosco.UI

namespace ShmupWarz

    class MenuUI: Stage
        prop game: ShmupWarzGame
        prop sceneLoader: SceneLoader

        construct(game: ShmupWarzGame, sceneLoader: SceneLoader)

            sceneLoader.loadScene("MenuScene") //, new FitViewport(350f, 480f))
            var pixelFactor = game.desktop ? game.scale : game.density > 1 ? 2 : 1
            var playButtonVo = sceneLoader.loadVoFromLibrary("playButton")
            // var playButtonActor = new CompositeActor(playButtonVo, sceneLoader.getRm)
            // var col = (getWidth-playButtonActor.getWidth*pixelFactor)/2f
            // var row = (pixelFactor-1f)*100f-200f*pixelFactor
            //   addActor(playButtonActor)
            //   playButtonActor.setX(col)
            //   playButtonActor.setY(row+220f*2f*pixelFactor)
            //   playButtonActor.setScale(pixelFactor)
            //   playButtonActor.addListener(new ClickListener() {
            //     override def clicked(event: InputEvent, x: Float, y: Float) {
            //       game.playGame()
            //     }
            //   })

            //   val scoreButtonVo  = sceneLoader.loadVoFromLibrary("scoreButton")
            //   val scoreButtonActor = new CompositeActor(scoreButtonVo, sceneLoader.getRm)
            //   addActor(scoreButtonActor)
            //   scoreButtonActor.setX(col)
            //   scoreButtonActor.setY(row+180f*2f*pixelFactor)
            //   scoreButtonActor.setScale(pixelFactor)
            //   scoreButtonActor.addListener(new ClickListener() {
            //     override def clicked(event: InputEvent, x: Float, y: Float) {
            //       game.scoreGame()
            //     }
            //   })

            //   val optionButtonVo  = sceneLoader.loadVoFromLibrary("optionButton")
            //   val optionButtonActor = new CompositeActor(optionButtonVo, sceneLoader.getRm)
            //   addActor(optionButtonActor)
            //   optionButtonActor.setX(col)
            //   optionButtonActor.setY(row+140f*2f*pixelFactor)
            //   optionButtonActor.setScale(pixelFactor)
            //   optionButtonActor.addListener(new ClickListener() {
            //     override def clicked(event: InputEvent, x: Float, y: Float) {
            //       game.optionsGame()
            //     }
            //   })

            //   Gdx.input.setInputProcessor(this)

