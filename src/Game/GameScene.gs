[indent=4]
/**
 * MenuScene.gs
 *
 * 
 *
 */
uses Overlap2D
uses sdx
uses sdx.scenes.scene2d

namespace ShmupWarz

    class GameScene : Object implements Screen

        prop sceneLoader: SceneLoader
        prop ui: Stage
        construct(desktop: bool, scale: double)
            _sceneLoader = sceneLoader
            _ui = ui
        def hide()
            pass
        def dispose()
            pass
        def pause()
            pass
        def show()
            pass
        def resume()
            pass
        def render(delta: double)
            // Gdx.gl.glClearColor(0f, 0f, 0f, 1f)
            // Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT)
            // sceneLoader.engine.update(delta)
            // ui.act()
            // ui.draw()
            pass

        def resize(width: int, height: int)
            pass    
    