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

    class ScoreUI: Stage
        prop game: ShmupWarzGame
        prop sceneLoader: SceneLoader

        construct(game: ShmupWarzGame, sceneLoader: SceneLoader)
            sceneLoader.loadScene("LeaderboardScene") //, new FitViewport(350f, 480f))

            //   val backButtonVo = sceneLoader.loadVoFromLibrary("backButton")
            //   val backButtonActor = new CompositeActor(backButtonVo, sceneLoader.getRm)
            //   val pixelFactor = if (game.desktop) game.scale else if (Gdx.graphics.getDensity > 1f) 2f else 1f
            //   // val pixelFactor = if (Gdx.graphics.getDensity > 1f) 2f else 1f
            //   val col = (getWidth-backButtonActor.getWidth*pixelFactor)/2f
            //   val row = (pixelFactor-1f)*100f-200f*pixelFactor

            //   sceneLoader.loadScene("LeaderboardScene", new FitViewport(350f, 480f))

            //   addActor(backButtonActor)
            //   backButtonActor.setX(col)
            //   backButtonActor.setY(row+110f*2f*pixelFactor)
            //   backButtonActor.setScale(pixelFactor)
            //   backButtonActor.addListener(new ClickListener() {
            //     override def clicked(event: InputEvent, x: Float, y: Float) {
            //       game.menuGame()
            //     }
            //   })

            //   Gdx.input.setInputProcessor(this)
