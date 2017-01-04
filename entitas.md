# using entitas

<<<<<<< Updated upstream
libEntitas is inspired by CSharp-Entitas. There are some differences. 

* vala does not support csharp's class extension. 
* this version does not support the IReactiveSystem interface
=======
libEntitas is inspired by CSharp-Entitas. There are some important differences. 

* this version does not support reactive systems. 
* vala does not support csharp's class extension. 
>>>>>>> Stashed changes

In place of class extensions, I'm generating static functions with the reciever entity as the first parameter. 
This has the unfortunate consequence of breaking the fluent coding style designed into entitas.

<<<<<<< Updated upstream
for example, my original expectation was that I could write my code thusly
```
    def createBackground() : Entity
        return World.instance.createEntity("background"
            ).addPosition(0, 0 
            ).addScale(2, 1
            ).addResource("res/images/BackdropBlackLittleSparkBlack.png", null, true)
```

But I cannot, instead, I must do it this way
```
    def createBackground() : Entity
        var entity = World.instance.createEntity("background")
        addPosition(entity, 0, 0)
        addScale(entity, 2, 1)
        addResource(entity, @"$RES/images/background.bmp", null, true)
        return entity
```


## generating code
Entitas generates types for each component, and typed methods to manipulate components for an entity.
It also generates scaffolding for systems.
=======
## generating code




>>>>>>> Stashed changes

