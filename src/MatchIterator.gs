/**
 * MatchIterator.gs
 *
 */
[indent=4]

namespace ShmupWarz
    /**
     * MatchAllOf
     * @param world where the pools are
     * @param components to match
     * @return Iterable for entities in the group
     *
     *  usage:
     *      _group = MatchAllOf(_world, {Component.ScaleTween, Component.Resource})
     */
    def MatchAllOf(world: Entitas.World, selection:array of int): MatchGroup
        return new MatchGroup(world.getGroup(Entitas.Matcher.AllOf(selection)))

    class abstract IterableOfEntity: Object implements Gee.Traversable of (Entity), Gee.Iterable of (Entity)
        prop abstract readonly element_type: Type
        def abstract iterator(): Gee.Iterator of Entity
        def @foreach(f: Gee.ForallFunc of Entity): bool
            for var i in self
                if not f(i)
                    return false
            return true
    /**
    * MatchGroup iterator
    *
    *  Unboxing Iterator
    *
    *  Iterate over a Entity.Group, 
    *  Casts each item to ShmupWarz.Entity 
    *
    */
    class MatchGroup: IterableOfEntity
        construct(entities: Entitas.Group)
            _entities = entities
        
        prop override readonly element_type: Type
            get
                return typeof(Entity)
            
        def override iterator(): Gee.Iterator of Entity
            return new EntityIterator(_entities.getEntities())

        _entities: Entitas.Group



    class EntityIterator: Object implements Gee.Traversable of (Entity), Gee.Iterator of (Entity)
        construct(entities: array of Entitas.IEntity)
            _entities = entities
            _length = entities.length

        prop readonly valid: bool = true
        prop readonly read_only: bool = true

        def next(): bool
            return ++_index < _length
        
        def new @get(): Entity
            return (Entity)_entities[_index]
        
        def has_next(): bool
            return _index < _length - 1
        
        def remove()
            pass // readonly

        def @foreach(f: Gee.ForallFunc of Entity): bool
            _index--
            while next()
                if not f(@get())
                    return false
            return true
        
        _entities: array of Entitas.IEntity
        _index: int = -1
        _length: uint

