/**
 * Entitas Generated Components and Extensions for ShmupWarz
 *
 * do not edit this file
 */
[indent=4]
namespace ShmupWarz

    const POOL_SIZE : int = 64

    /**
    * Component extensions
    */
    const components: array of string = {
        "ActiveComponent",
        "BoundsComponent",
        "BulletComponent",
        "ColorTweenComponent",
        "DestroyComponent",
        "EnemyComponent",
        "ExpiresComponent",
        "HealthComponent",
        "LayerComponent",
        "PlayerComponent",
        "PositionComponent",
        "ScaleTweenComponent",
        "ScaleComponent",
        "ScoreComponent",
        "SoundEffectComponent",
        "TextComponent",
        "TintComponent",
        "VelocityComponent",
        "ViewComponent",
        "ComponentsCount"
    }

    enum Component
        Active
        Bounds
        Bullet
        ColorTween
        Destroy
        Enemy
        Expires
        Health
        Layer
        Player
        Position
        ScaleTween
        Scale
        Score
        SoundEffect
        Text
        Tint
        Velocity
        View
        ComponentsCount



    class ActiveComponent : Object implements Entitas.IComponent 
        active : bool = true

    class BoundsComponent : Object implements Entitas.IComponent 
        radius : double 

    class BulletComponent : Object implements Entitas.IComponent 
        active : bool = true

    class ColorTweenComponent : Object implements Entitas.IComponent 
        redMin : double 
        redMax : double 
        redSpeed : double 
        greenMin : double 
        greenMax : double 
        greenSpeed : double 
        blueMin : double 
        blueMax : double 
        blueSpeed : double 
        alphaMin : double 
        alphaMax : double 
        alphaSpeed : double 
        redAnimate : bool 
        greenAnimate : bool 
        blueAnimate : bool 
        alphaAnimate : bool 
        repeat : bool 

    class DestroyComponent : Object implements Entitas.IComponent 
        active : bool = true

    class EnemyComponent : Object implements Entitas.IComponent 
        active : bool = true

    class ExpiresComponent : Object implements Entitas.IComponent 
        delay : double 

    class HealthComponent : Object implements Entitas.IComponent 
        health : double 
        maximumHealth : double 

    class LayerComponent : Object implements Entitas.IComponent 
        ordinal : int 

    class PlayerComponent : Object implements Entitas.IComponent 
        active : bool = true

    class PositionComponent : Object implements Entitas.IComponent 
        x : double 
        y : double 

    class ScaleTweenComponent : Object implements Entitas.IComponent 
        min : double 
        max : double 
        speed : double 
        repeat : bool 
        active : bool 

    class ScaleComponent : Object implements Entitas.IComponent 
        x : double 
        y : double 

    class ScoreComponent : Object implements Entitas.IComponent 
        value : double 

    class SoundEffectComponent : Object implements Entitas.IComponent 
        effect : int 

    class TextComponent : Object implements Entitas.IComponent 
        text : string 
        sprite : sdx.graphics.s2d.Sprite 

    class TintComponent : Object implements Entitas.IComponent 
        r : int 
        g : int 
        b : int 
        a : int 

    class VelocityComponent : Object implements Entitas.IComponent 
        x : double 
        y : double 

    class ViewComponent : Object implements Entitas.IComponent 
        sprite : sdx.graphics.s2d.Sprite 
        centered : bool 



    /**
    * Entity extensions
    */
    class Entity : Entitas.Entity

        construct(componentsEnum : array of string, totalComponents : int=32)
            super(componentsEnum, totalComponents)

        /** Entity: Active methods*/

        /** @type boolean */
        prop isActive : bool
            get
                return hasComponent(Component.Active)
            set
                if value
                    addComponent(Component.Active, _activeComponent)
                else
                    removeComponent(Component.Active)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setActive(value : bool) : Entity
            isActive = value
            return this


        /** Entity: Bounds methods*/

        /** @type Bounds */
        prop bounds : BoundsComponent
            get
                return (BoundsComponent)getComponent(Component.Bounds)

        /** @type boolean */
        prop hasBounds : bool
            get
                return hasComponent(Component.Bounds)
 
        def clearBoundsComponentPool()
            _boundsComponentPool.clear()

        /**
         * @param radius double
         * @return entitas.Entity
         */
        def addBounds(radius:double) : Entity
            var c = _boundsComponentPool.length > 0 ? _boundsComponentPool.pop_head() : new BoundsComponent()
            c.radius = radius
            addComponent(Component.Bounds, c)
            return this

        /**
         * @param radius double
         * @return entitas.Entity
         */
        def replaceBounds(radius:double) : Entity
            var previousComponent = hasBounds ? this.bounds : null
            var c = _boundsComponentPool.length>0? _boundsComponentPool.pop_head() : new BoundsComponent()
            c.radius = radius
            replaceComponent(Component.Bounds, c) 
            if previousComponent != null
                _boundsComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeBounds() : Entity
            var c = bounds
            removeComponent(Component.Bounds) 
            _boundsComponentPool.push_head(c)
            return this


        /** Entity: Bullet methods*/

        /** @type boolean */
        prop isBullet : bool
            get
                return hasComponent(Component.Bullet)
            set
                if value
                    addComponent(Component.Bullet, _bulletComponent)
                else
                    removeComponent(Component.Bullet)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setBullet(value : bool) : Entity
            isBullet = value
            return this


        /** Entity: ColorTween methods*/

        /** @type ColorTween */
        prop colorTween : ColorTweenComponent
            get
                return (ColorTweenComponent)getComponent(Component.ColorTween)

        /** @type boolean */
        prop hasColorTween : bool
            get
                return hasComponent(Component.ColorTween)
 
        def clearColorTweenComponentPool()
            _colorTweenComponentPool.clear()

        /**
         * @param redMin double
         * @param redMax double
         * @param redSpeed double
         * @param greenMin double
         * @param greenMax double
         * @param greenSpeed double
         * @param blueMin double
         * @param blueMax double
         * @param blueSpeed double
         * @param alphaMin double
         * @param alphaMax double
         * @param alphaSpeed double
         * @param redAnimate bool
         * @param greenAnimate bool
         * @param blueAnimate bool
         * @param alphaAnimate bool
         * @param repeat bool
         * @return entitas.Entity
         */
        def addColorTween(redMin:double,redMax:double,redSpeed:double,greenMin:double,greenMax:double,greenSpeed:double,blueMin:double,blueMax:double,blueSpeed:double,alphaMin:double,alphaMax:double,alphaSpeed:double,redAnimate:bool,greenAnimate:bool,blueAnimate:bool,alphaAnimate:bool,repeat:bool) : Entity
            var c = _colorTweenComponentPool.length > 0 ? _colorTweenComponentPool.pop_head() : new ColorTweenComponent()
            c.redMin = redMin
            c.redMax = redMax
            c.redSpeed = redSpeed
            c.greenMin = greenMin
            c.greenMax = greenMax
            c.greenSpeed = greenSpeed
            c.blueMin = blueMin
            c.blueMax = blueMax
            c.blueSpeed = blueSpeed
            c.alphaMin = alphaMin
            c.alphaMax = alphaMax
            c.alphaSpeed = alphaSpeed
            c.redAnimate = redAnimate
            c.greenAnimate = greenAnimate
            c.blueAnimate = blueAnimate
            c.alphaAnimate = alphaAnimate
            c.repeat = repeat
            addComponent(Component.ColorTween, c)
            return this

        /**
         * @param redMin double
         * @param redMax double
         * @param redSpeed double
         * @param greenMin double
         * @param greenMax double
         * @param greenSpeed double
         * @param blueMin double
         * @param blueMax double
         * @param blueSpeed double
         * @param alphaMin double
         * @param alphaMax double
         * @param alphaSpeed double
         * @param redAnimate bool
         * @param greenAnimate bool
         * @param blueAnimate bool
         * @param alphaAnimate bool
         * @param repeat bool
         * @return entitas.Entity
         */
        def replaceColorTween(redMin:double,redMax:double,redSpeed:double,greenMin:double,greenMax:double,greenSpeed:double,blueMin:double,blueMax:double,blueSpeed:double,alphaMin:double,alphaMax:double,alphaSpeed:double,redAnimate:bool,greenAnimate:bool,blueAnimate:bool,alphaAnimate:bool,repeat:bool) : Entity
            var previousComponent = hasColorTween ? this.colorTween : null
            var c = _colorTweenComponentPool.length>0? _colorTweenComponentPool.pop_head() : new ColorTweenComponent()
            c.redMin = redMin
            c.redMax = redMax
            c.redSpeed = redSpeed
            c.greenMin = greenMin
            c.greenMax = greenMax
            c.greenSpeed = greenSpeed
            c.blueMin = blueMin
            c.blueMax = blueMax
            c.blueSpeed = blueSpeed
            c.alphaMin = alphaMin
            c.alphaMax = alphaMax
            c.alphaSpeed = alphaSpeed
            c.redAnimate = redAnimate
            c.greenAnimate = greenAnimate
            c.blueAnimate = blueAnimate
            c.alphaAnimate = alphaAnimate
            c.repeat = repeat
            replaceComponent(Component.ColorTween, c) 
            if previousComponent != null
                _colorTweenComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeColorTween() : Entity
            var c = colorTween
            removeComponent(Component.ColorTween) 
            _colorTweenComponentPool.push_head(c)
            return this


        /** Entity: Destroy methods*/

        /** @type boolean */
        prop isDestroy : bool
            get
                return hasComponent(Component.Destroy)
            set
                if value
                    addComponent(Component.Destroy, _destroyComponent)
                else
                    removeComponent(Component.Destroy)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setDestroy(value : bool) : Entity
            isDestroy = value
            return this


        /** Entity: Enemy methods*/

        /** @type boolean */
        prop isEnemy : bool
            get
                return hasComponent(Component.Enemy)
            set
                if value
                    addComponent(Component.Enemy, _enemyComponent)
                else
                    removeComponent(Component.Enemy)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setEnemy(value : bool) : Entity
            isEnemy = value
            return this


        /** Entity: Expires methods*/

        /** @type Expires */
        prop expires : ExpiresComponent
            get
                return (ExpiresComponent)getComponent(Component.Expires)

        /** @type boolean */
        prop hasExpires : bool
            get
                return hasComponent(Component.Expires)
 
        def clearExpiresComponentPool()
            _expiresComponentPool.clear()

        /**
         * @param delay double
         * @return entitas.Entity
         */
        def addExpires(delay:double) : Entity
            var c = _expiresComponentPool.length > 0 ? _expiresComponentPool.pop_head() : new ExpiresComponent()
            c.delay = delay
            addComponent(Component.Expires, c)
            return this

        /**
         * @param delay double
         * @return entitas.Entity
         */
        def replaceExpires(delay:double) : Entity
            var previousComponent = hasExpires ? this.expires : null
            var c = _expiresComponentPool.length>0? _expiresComponentPool.pop_head() : new ExpiresComponent()
            c.delay = delay
            replaceComponent(Component.Expires, c) 
            if previousComponent != null
                _expiresComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeExpires() : Entity
            var c = expires
            removeComponent(Component.Expires) 
            _expiresComponentPool.push_head(c)
            return this


        /** Entity: Health methods*/

        /** @type Health */
        prop health : HealthComponent
            get
                return (HealthComponent)getComponent(Component.Health)

        /** @type boolean */
        prop hasHealth : bool
            get
                return hasComponent(Component.Health)
 
        def clearHealthComponentPool()
            _healthComponentPool.clear()

        /**
         * @param health double
         * @param maximumHealth double
         * @return entitas.Entity
         */
        def addHealth(health:double,maximumHealth:double) : Entity
            var c = _healthComponentPool.length > 0 ? _healthComponentPool.pop_head() : new HealthComponent()
            c.health = health
            c.maximumHealth = maximumHealth
            addComponent(Component.Health, c)
            return this

        /**
         * @param health double
         * @param maximumHealth double
         * @return entitas.Entity
         */
        def replaceHealth(health:double,maximumHealth:double) : Entity
            var previousComponent = hasHealth ? this.health : null
            var c = _healthComponentPool.length>0? _healthComponentPool.pop_head() : new HealthComponent()
            c.health = health
            c.maximumHealth = maximumHealth
            replaceComponent(Component.Health, c) 
            if previousComponent != null
                _healthComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeHealth() : Entity
            var c = health
            removeComponent(Component.Health) 
            _healthComponentPool.push_head(c)
            return this


        /** Entity: Layer methods*/

        /** @type Layer */
        prop layer : LayerComponent
            get
                return (LayerComponent)getComponent(Component.Layer)

        /** @type boolean */
        prop hasLayer : bool
            get
                return hasComponent(Component.Layer)
 
        def clearLayerComponentPool()
            _layerComponentPool.clear()

        /**
         * @param ordinal int
         * @return entitas.Entity
         */
        def addLayer(ordinal:int) : Entity
            var c = _layerComponentPool.length > 0 ? _layerComponentPool.pop_head() : new LayerComponent()
            c.ordinal = ordinal
            addComponent(Component.Layer, c)
            return this

        /**
         * @param ordinal int
         * @return entitas.Entity
         */
        def replaceLayer(ordinal:int) : Entity
            var previousComponent = hasLayer ? this.layer : null
            var c = _layerComponentPool.length>0? _layerComponentPool.pop_head() : new LayerComponent()
            c.ordinal = ordinal
            replaceComponent(Component.Layer, c) 
            if previousComponent != null
                _layerComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeLayer() : Entity
            var c = layer
            removeComponent(Component.Layer) 
            _layerComponentPool.push_head(c)
            return this


        /** Entity: Player methods*/

        /** @type boolean */
        prop isPlayer : bool
            get
                return hasComponent(Component.Player)
            set
                if value
                    addComponent(Component.Player, _playerComponent)
                else
                    removeComponent(Component.Player)
                
        /**
         * @param value boolean
         * @return entitas.Entity
         */
        def setPlayer(value : bool) : Entity
            isPlayer = value
            return this


        /** Entity: Position methods*/

        /** @type Position */
        prop position : PositionComponent
            get
                return (PositionComponent)getComponent(Component.Position)

        /** @type boolean */
        prop hasPosition : bool
            get
                return hasComponent(Component.Position)
 
        def clearPositionComponentPool()
            _positionComponentPool.clear()

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def addPosition(x:double,y:double) : Entity
            var c = _positionComponentPool.length > 0 ? _positionComponentPool.pop_head() : new PositionComponent()
            c.x = x
            c.y = y
            addComponent(Component.Position, c)
            return this

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def replacePosition(x:double,y:double) : Entity
            var previousComponent = hasPosition ? this.position : null
            var c = _positionComponentPool.length>0? _positionComponentPool.pop_head() : new PositionComponent()
            c.x = x
            c.y = y
            replaceComponent(Component.Position, c) 
            if previousComponent != null
                _positionComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removePosition() : Entity
            var c = position
            removeComponent(Component.Position) 
            _positionComponentPool.push_head(c)
            return this


        /** Entity: ScaleTween methods*/

        /** @type ScaleTween */
        prop scaleTween : ScaleTweenComponent
            get
                return (ScaleTweenComponent)getComponent(Component.ScaleTween)

        /** @type boolean */
        prop hasScaleTween : bool
            get
                return hasComponent(Component.ScaleTween)
 
        def clearScaleTweenComponentPool()
            _scaleTweenComponentPool.clear()

        /**
         * @param min double
         * @param max double
         * @param speed double
         * @param repeat bool
         * @param active bool
         * @return entitas.Entity
         */
        def addScaleTween(min:double,max:double,speed:double,repeat:bool,active:bool) : Entity
            var c = _scaleTweenComponentPool.length > 0 ? _scaleTweenComponentPool.pop_head() : new ScaleTweenComponent()
            c.min = min
            c.max = max
            c.speed = speed
            c.repeat = repeat
            c.active = active
            addComponent(Component.ScaleTween, c)
            return this

        /**
         * @param min double
         * @param max double
         * @param speed double
         * @param repeat bool
         * @param active bool
         * @return entitas.Entity
         */
        def replaceScaleTween(min:double,max:double,speed:double,repeat:bool,active:bool) : Entity
            var previousComponent = hasScaleTween ? this.scaleTween : null
            var c = _scaleTweenComponentPool.length>0? _scaleTweenComponentPool.pop_head() : new ScaleTweenComponent()
            c.min = min
            c.max = max
            c.speed = speed
            c.repeat = repeat
            c.active = active
            replaceComponent(Component.ScaleTween, c) 
            if previousComponent != null
                _scaleTweenComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeScaleTween() : Entity
            var c = scaleTween
            removeComponent(Component.ScaleTween) 
            _scaleTweenComponentPool.push_head(c)
            return this


        /** Entity: Scale methods*/

        /** @type Scale */
        prop scale : ScaleComponent
            get
                return (ScaleComponent)getComponent(Component.Scale)

        /** @type boolean */
        prop hasScale : bool
            get
                return hasComponent(Component.Scale)
 
        def clearScaleComponentPool()
            _scaleComponentPool.clear()

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def addScale(x:double,y:double) : Entity
            var c = _scaleComponentPool.length > 0 ? _scaleComponentPool.pop_head() : new ScaleComponent()
            c.x = x
            c.y = y
            addComponent(Component.Scale, c)
            return this

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def replaceScale(x:double,y:double) : Entity
            var previousComponent = hasScale ? this.scale : null
            var c = _scaleComponentPool.length>0? _scaleComponentPool.pop_head() : new ScaleComponent()
            c.x = x
            c.y = y
            replaceComponent(Component.Scale, c) 
            if previousComponent != null
                _scaleComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeScale() : Entity
            var c = scale
            removeComponent(Component.Scale) 
            _scaleComponentPool.push_head(c)
            return this


        /** Entity: Score methods*/

        /** @type Score */
        prop score : ScoreComponent
            get
                return (ScoreComponent)getComponent(Component.Score)

        /** @type boolean */
        prop hasScore : bool
            get
                return hasComponent(Component.Score)
 
        def clearScoreComponentPool()
            _scoreComponentPool.clear()

        /**
         * @param value double
         * @return entitas.Entity
         */
        def addScore(value:double) : Entity
            var c = _scoreComponentPool.length > 0 ? _scoreComponentPool.pop_head() : new ScoreComponent()
            c.value = value
            addComponent(Component.Score, c)
            return this

        /**
         * @param value double
         * @return entitas.Entity
         */
        def replaceScore(value:double) : Entity
            var previousComponent = hasScore ? this.score : null
            var c = _scoreComponentPool.length>0? _scoreComponentPool.pop_head() : new ScoreComponent()
            c.value = value
            replaceComponent(Component.Score, c) 
            if previousComponent != null
                _scoreComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeScore() : Entity
            var c = score
            removeComponent(Component.Score) 
            _scoreComponentPool.push_head(c)
            return this


        /** Entity: SoundEffect methods*/

        /** @type SoundEffect */
        prop soundEffect : SoundEffectComponent
            get
                return (SoundEffectComponent)getComponent(Component.SoundEffect)

        /** @type boolean */
        prop hasSoundEffect : bool
            get
                return hasComponent(Component.SoundEffect)
 
        def clearSoundEffectComponentPool()
            _soundEffectComponentPool.clear()

        /**
         * @param effect int
         * @return entitas.Entity
         */
        def addSoundEffect(effect:int) : Entity
            var c = _soundEffectComponentPool.length > 0 ? _soundEffectComponentPool.pop_head() : new SoundEffectComponent()
            c.effect = effect
            addComponent(Component.SoundEffect, c)
            return this

        /**
         * @param effect int
         * @return entitas.Entity
         */
        def replaceSoundEffect(effect:int) : Entity
            var previousComponent = hasSoundEffect ? this.soundEffect : null
            var c = _soundEffectComponentPool.length>0? _soundEffectComponentPool.pop_head() : new SoundEffectComponent()
            c.effect = effect
            replaceComponent(Component.SoundEffect, c) 
            if previousComponent != null
                _soundEffectComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeSoundEffect() : Entity
            var c = soundEffect
            removeComponent(Component.SoundEffect) 
            _soundEffectComponentPool.push_head(c)
            return this


        /** Entity: Text methods*/

        /** @type Text */
        prop text : TextComponent
            get
                return (TextComponent)getComponent(Component.Text)

        /** @type boolean */
        prop hasText : bool
            get
                return hasComponent(Component.Text)
 
        def clearTextComponentPool()
            _textComponentPool.clear()

        /**
         * @param text string
         * @param sprite sdx.graphics.s2d.Sprite
         * @return entitas.Entity
         */
        def addText(text:string,sprite:sdx.graphics.s2d.Sprite?) : Entity
            var c = _textComponentPool.length > 0 ? _textComponentPool.pop_head() : new TextComponent()
            c.text = text
            c.sprite = sprite
            addComponent(Component.Text, c)
            return this

        /**
         * @param text string
         * @param sprite sdx.graphics.s2d.Sprite
         * @return entitas.Entity
         */
        def replaceText(text:string,sprite:sdx.graphics.s2d.Sprite?) : Entity
            var previousComponent = hasText ? this.text : null
            var c = _textComponentPool.length>0? _textComponentPool.pop_head() : new TextComponent()
            c.text = text
            c.sprite = sprite
            replaceComponent(Component.Text, c) 
            if previousComponent != null
                _textComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeText() : Entity
            var c = text
            removeComponent(Component.Text) 
            _textComponentPool.push_head(c)
            return this


        /** Entity: Tint methods*/

        /** @type Tint */
        prop tint : TintComponent
            get
                return (TintComponent)getComponent(Component.Tint)

        /** @type boolean */
        prop hasTint : bool
            get
                return hasComponent(Component.Tint)
 
        def clearTintComponentPool()
            _tintComponentPool.clear()

        /**
         * @param r int
         * @param g int
         * @param b int
         * @param a int
         * @return entitas.Entity
         */
        def addTint(r:int,g:int,b:int,a:int) : Entity
            var c = _tintComponentPool.length > 0 ? _tintComponentPool.pop_head() : new TintComponent()
            c.r = r
            c.g = g
            c.b = b
            c.a = a
            addComponent(Component.Tint, c)
            return this

        /**
         * @param r int
         * @param g int
         * @param b int
         * @param a int
         * @return entitas.Entity
         */
        def replaceTint(r:int,g:int,b:int,a:int) : Entity
            var previousComponent = hasTint ? this.tint : null
            var c = _tintComponentPool.length>0? _tintComponentPool.pop_head() : new TintComponent()
            c.r = r
            c.g = g
            c.b = b
            c.a = a
            replaceComponent(Component.Tint, c) 
            if previousComponent != null
                _tintComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeTint() : Entity
            var c = tint
            removeComponent(Component.Tint) 
            _tintComponentPool.push_head(c)
            return this


        /** Entity: Velocity methods*/

        /** @type Velocity */
        prop velocity : VelocityComponent
            get
                return (VelocityComponent)getComponent(Component.Velocity)

        /** @type boolean */
        prop hasVelocity : bool
            get
                return hasComponent(Component.Velocity)
 
        def clearVelocityComponentPool()
            _velocityComponentPool.clear()

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def addVelocity(x:double,y:double) : Entity
            var c = _velocityComponentPool.length > 0 ? _velocityComponentPool.pop_head() : new VelocityComponent()
            c.x = x
            c.y = y
            addComponent(Component.Velocity, c)
            return this

        /**
         * @param x double
         * @param y double
         * @return entitas.Entity
         */
        def replaceVelocity(x:double,y:double) : Entity
            var previousComponent = hasVelocity ? this.velocity : null
            var c = _velocityComponentPool.length>0? _velocityComponentPool.pop_head() : new VelocityComponent()
            c.x = x
            c.y = y
            replaceComponent(Component.Velocity, c) 
            if previousComponent != null
                _velocityComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeVelocity() : Entity
            var c = velocity
            removeComponent(Component.Velocity) 
            _velocityComponentPool.push_head(c)
            return this


        /** Entity: View methods*/

        /** @type View */
        prop view : ViewComponent
            get
                return (ViewComponent)getComponent(Component.View)

        /** @type boolean */
        prop hasView : bool
            get
                return hasComponent(Component.View)
 
        def clearViewComponentPool()
            _viewComponentPool.clear()

        /**
         * @param sprite sdx.graphics.s2d.Sprite
         * @param centered bool
         * @return entitas.Entity
         */
        def addView(sprite:sdx.graphics.s2d.Sprite?,centered:bool) : Entity
            var c = _viewComponentPool.length > 0 ? _viewComponentPool.pop_head() : new ViewComponent()
            c.sprite = sprite
            c.centered = centered
            addComponent(Component.View, c)
            return this

        /**
         * @param sprite sdx.graphics.s2d.Sprite
         * @param centered bool
         * @return entitas.Entity
         */
        def replaceView(sprite:sdx.graphics.s2d.Sprite?,centered:bool) : Entity
            var previousComponent = hasView ? this.view : null
            var c = _viewComponentPool.length>0? _viewComponentPool.pop_head() : new ViewComponent()
            c.sprite = sprite
            c.centered = centered
            replaceComponent(Component.View, c) 
            if previousComponent != null
                _viewComponentPool.push_head(previousComponent)
            return this

        /**
         * @returns entitas.Entity
         */
        def removeView() : Entity
            var c = view
            removeComponent(Component.View) 
            _viewComponentPool.push_head(c)
            return this



    /** @type Active */
    _activeComponent : ActiveComponent
        /** @type entitas.utils.GLib.Queue<Bounds> */
    _boundsComponentPool : GLib.Queue of BoundsComponent

    /** @type Bullet */
    _bulletComponent : BulletComponent
        /** @type entitas.utils.GLib.Queue<ColorTween> */
    _colorTweenComponentPool : GLib.Queue of ColorTweenComponent

    /** @type Destroy */
    _destroyComponent : DestroyComponent

    /** @type Enemy */
    _enemyComponent : EnemyComponent
        /** @type entitas.utils.GLib.Queue<Expires> */
    _expiresComponentPool : GLib.Queue of ExpiresComponent
        /** @type entitas.utils.GLib.Queue<Health> */
    _healthComponentPool : GLib.Queue of HealthComponent
        /** @type entitas.utils.GLib.Queue<Layer> */
    _layerComponentPool : GLib.Queue of LayerComponent

    /** @type Player */
    _playerComponent : PlayerComponent
        /** @type entitas.utils.GLib.Queue<Position> */
    _positionComponentPool : GLib.Queue of PositionComponent
        /** @type entitas.utils.GLib.Queue<ScaleTween> */
    _scaleTweenComponentPool : GLib.Queue of ScaleTweenComponent
        /** @type entitas.utils.GLib.Queue<Scale> */
    _scaleComponentPool : GLib.Queue of ScaleComponent
        /** @type entitas.utils.GLib.Queue<Score> */
    _scoreComponentPool : GLib.Queue of ScoreComponent
        /** @type entitas.utils.GLib.Queue<SoundEffect> */
    _soundEffectComponentPool : GLib.Queue of SoundEffectComponent
        /** @type entitas.utils.GLib.Queue<Text> */
    _textComponentPool : GLib.Queue of TextComponent
        /** @type entitas.utils.GLib.Queue<Tint> */
    _tintComponentPool : GLib.Queue of TintComponent
        /** @type entitas.utils.GLib.Queue<Velocity> */
    _velocityComponentPool : GLib.Queue of VelocityComponent
        /** @type entitas.utils.GLib.Queue<View> */
    _viewComponentPool : GLib.Queue of ViewComponent


    def initPools()
        /* Preallocate component pools*/

        _activeComponent = new ActiveComponent()
        _boundsComponentPool = new GLib.Queue of BoundsComponent
        for var i=1 to POOL_SIZE
            _boundsComponentPool.push_head(new BoundsComponent())

        _bulletComponent = new BulletComponent()
        _colorTweenComponentPool = new GLib.Queue of ColorTweenComponent
        for var i=1 to POOL_SIZE
            _colorTweenComponentPool.push_head(new ColorTweenComponent())

        _destroyComponent = new DestroyComponent()

        _enemyComponent = new EnemyComponent()
        _expiresComponentPool = new GLib.Queue of ExpiresComponent
        for var i=1 to POOL_SIZE
            _expiresComponentPool.push_head(new ExpiresComponent())
        _healthComponentPool = new GLib.Queue of HealthComponent
        for var i=1 to POOL_SIZE
            _healthComponentPool.push_head(new HealthComponent())
        _layerComponentPool = new GLib.Queue of LayerComponent
        for var i=1 to POOL_SIZE
            _layerComponentPool.push_head(new LayerComponent())

        _playerComponent = new PlayerComponent()
        _positionComponentPool = new GLib.Queue of PositionComponent
        for var i=1 to POOL_SIZE
            _positionComponentPool.push_head(new PositionComponent())
        _scaleTweenComponentPool = new GLib.Queue of ScaleTweenComponent
        for var i=1 to POOL_SIZE
            _scaleTweenComponentPool.push_head(new ScaleTweenComponent())
        _scaleComponentPool = new GLib.Queue of ScaleComponent
        for var i=1 to POOL_SIZE
            _scaleComponentPool.push_head(new ScaleComponent())
        _scoreComponentPool = new GLib.Queue of ScoreComponent
        for var i=1 to POOL_SIZE
            _scoreComponentPool.push_head(new ScoreComponent())
        _soundEffectComponentPool = new GLib.Queue of SoundEffectComponent
        for var i=1 to POOL_SIZE
            _soundEffectComponentPool.push_head(new SoundEffectComponent())
        _textComponentPool = new GLib.Queue of TextComponent
        for var i=1 to POOL_SIZE
            _textComponentPool.push_head(new TextComponent())
        _tintComponentPool = new GLib.Queue of TintComponent
        for var i=1 to POOL_SIZE
            _tintComponentPool.push_head(new TintComponent())
        _velocityComponentPool = new GLib.Queue of VelocityComponent
        for var i=1 to POOL_SIZE
            _velocityComponentPool.push_head(new VelocityComponent())
        _viewComponentPool = new GLib.Queue of ViewComponent
        for var i=1 to POOL_SIZE
            _viewComponentPool.push_head(new ViewComponent())

