[indent=4]
/**
 * Screen.gs
 *
 * 
 *
 */
namespace Bosco.UI

    /** <p>
     * Represents one of many application screens, such as a main menu, a settings menu, the game screen and so on.
     * </p>
     * <p>
     * Note that {@link #dispose()} is not called automatically.
     * </p>
     * @see Game */
    interface Screen : Object

	    /** Called when this screen becomes the current screen for a {@link Game}. */
        def abstract show()

        /** Called when the screen should render itself.
         * @param delta The time in seconds since the last render. */
        def abstract render(delta: double)

	    /** @see ApplicationListener#resize(int, int) */
        def abstract resize(width: int, height: int)

	    /** @see ApplicationListener#pause() */
        def abstract pause()

	    /** @see ApplicationListener#resume() */
        def abstract resume()

	    /** Called when this screen is no longer the current screen for a {@link Game}. */
        def abstract hide()

    	/** Called when this screen should release all resources. */
        def abstract dispose()
        