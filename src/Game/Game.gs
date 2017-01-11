[indent=4]
/**
 * ApplicationListener.gs
 *
 * 
 *
 */
uses Bosco

namespace Bosco.UI

    /** <p>
     * An {@link ApplicationListener} that delegates to a {@link Screen}. This allows an application to easily have multiple screens.
     * </p>
     * <p>
     * Screens are not disposed automatically. You must handle whether you want to keep screens around or dispose of them when another
     * screen is set.
     * </p> */
    class abstract Game : AbstractGame implements ApplicationListener
        screen : Screen

        def abstract create()

        def dispose()
            if screen != null do screen.hide()
            
        def pause()
            if screen != null do screen.pause()
            
        def resume()
            if screen != null do screen.resume()
            
        def render(delta: double)
            if screen != null do screen.render(delta)
            
        def resize(width: int, height: int)
            if screen != null do screen.resize(width, height)

        /** Sets the current screen. {@link Screen#hide()} is called on any old screen, and {@link Screen#show()} is called on the new
         * screen, if any.
         * @param screen may be {@code null} */
        def setScreen(screen: Screen)
            if this.screen != null do this.screen.hide()
            this.screen = screen
            if this.screen != null  
                this.screen.show()
                // this.screen.resize()

	    /** @return the currently active {@link Screen}. */
        def getScreen(): Screen
            return screen
