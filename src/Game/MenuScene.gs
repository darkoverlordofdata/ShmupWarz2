[indent=4]
/**
 * MenuScene.gs
 *
 * 
 *
 */
uses sdx
uses sdx.scenes.scene2d
uses o2d
uses o2d.data
uses o2d.scene2d

namespace ShmupWarz

    class MenuScene : Object implements Screen

        prop sceneLoader: SceneLoader
        prop ui: Stage
        construct(sceneLoader: SceneLoader, ui: Stage)
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
            print "render %f", delta
            // Gdx.gl.glClearColor(0f, 0f, 0f, 1f)
            // Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT)
            // sceneLoader.engine.update(delta)
            // ui.act()
            // ui.draw()
            pass

        def resize(width: int, height: int)
            pass    
    