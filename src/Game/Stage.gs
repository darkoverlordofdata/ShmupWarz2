[indent=4]
/**
 * Stage.gs
 *
 * 
 *
 */
namespace Bosco.UI

    /** Interface for disposable resources.
     * @author mzechner */
    interface Disposable : Object
	    /** Releases all resources of this object. */
        def abstract dispose()

    /** A 2D scene graph containing hierarchies of {@link Actor actors}. Stage handles the viewport and distributes input events.
    * <p>
    * {@link #setViewport(Viewport)} controls the coordinates used within the stage and sets up the camera used to convert between
    * stage coordinates and screen coordinates.
    * <p>
    * A stage must receive input events so it can distribute them to actors. This is typically done by passing the stage to
    * {@link Input#setInputProcessor(com.badlogic.gdx.InputProcessor) Gdx.input.setInputProcessor}. An {@link InputMultiplexer} may
    * be used to handle input events before or after the stage does. If an actor handles an event by returning true from the input
    * method, then the stage's input method will also return true, causing subsequent InputProcessors to not receive the event.
    * <p>
    * The Stage and its constituents (like Actors and Listeners) are not thread-safe and should only be updated and queried from a
    * single thread (presumably the main render thread). Methods should be reentrant, so you can update Actors and Stages from within
    * callbacks and handlers.
    * @author mzechner
    * @author Nathan Sweet */
    class Stage : InputAdapter implements Disposable

        construct()
            pass
            