[indent=4]
/**
 * Pool.gs
 *
 * 
 *
 */
uses Bosco
uses GLib

namespace Bosco.UI

    exception Exception 
        IllegalArgumentException

    interface Poolable   
        def abstract reset()

    class abstract Pool of T : Object


        max : int = 0xffff
        peak: int

        freeObjects: Queue of T

        def abstract newObject(): T

        def obtain(): T
            return freeObjects.get_length() == 0 ? newObject() : freeObjects.pop_head()
    
        def free(object: Object)
            if object == null do raise new Exception.IllegalArgumentException("object cannot be null.")
            if freeObjects.get_length() < max
                freeObjects.push_head(object)
                peak = (int)Math.fmax(peak, freeObjects.get_length())
            reset(object)

        def reset(object: T)
            if object isa Poolable do ((Poolable)object).reset()

        def freeAll(objects: array of T)
            if objects == null do raise new Exception.IllegalArgumentException("objects cannot be null.")
            
            for var i = 0 to (objects.length-1)
                var object = objects[i]
                if object == null do continue
                if freeObjects.get_length() < max do freeObjects.push_head(object)
                reset(object)
            peak = (int)Math.fmax(peak, freeObjects.get_length())
                
                
        def clear()
            freeObjects.clear()

        def getFree(): int  
            return (int)freeObjects.get_length()
