[indent=4]
/**
 * ApplicationListener.gs
 *
 * 
 *
 */
uses Bosco
uses Gee

namespace Bosco.UI

    enum Touchable
        enabled
        disabled
        childrenOnly

    class Actor : Object
        stage: private Stage
        group: Group
        listeners: ArrayList of EventListener
        captureListeners: ArrayList of EventListener
        action: ArrayList of EventListener

        construct()
            pass

