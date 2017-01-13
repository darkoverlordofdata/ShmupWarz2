[indent=4]
/**
 * Pools.gs
 *
 * 
 *
 */
uses Bosco
uses GLib

namespace Bosco.UI

    class Pools: Object

        prop private static typePools: dict of Type, Pool = new dict of Type, Pool

        def static getPool(type: Type): Pool 
            var pool = typePools[type]
            if pool == null
                pool = (Pool)Object.new(type)
                typePools[type] = pool

            return pool
        
        def static setPool(type: Type, pool: Pool)
            typePools[type] = pool
        

        def static obtain(type: Type): Pool
            return getPool(type)


        def static free(object: Object)
            if object == null do raise new Exception.IllegalArgumentException("object cannot be null.")
            var type = object.get_type()
            var pool = typePools[type]
            if pool == null do return
            pool.free(object)

