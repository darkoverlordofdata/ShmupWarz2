# Notes

I found little structural change required when porting the game from scala to genie.
This likely means that I wasn't fully using functuional caps of scala. This is true, the 
functional and framework (entitas) versions are very different. When using a framework, much
of the code flow is dictated by the framework. 

Vala/Genie have a modicum of functional capability:
Inferred types for local vars.
Delegates. Top level and nested functions.
Built in list.
Gee has mapping functionality.

Genie is more accessable then scala. Gee data structures are comparable to Scala or Kotlin.
Differences between Genie and Scala remind me of the differences between Kotlin and Scala.

Scala is more elegant, but... the eight hundred pound jvm is in the room. 
Then there is the whole sbt vs gradle vs maven etc set of problems. Autovala is painless.

## status
all of the associate code has been ported for the Scala version. This includes
* shmupwarz-scala
* libgdx
* overlap2d-runtime-libgdx

working...just the core game. Next is getting the other screens working.

done: add IEntity to entitas, allows return to fluent style in EntityFactory

## pro v con

Vala doesn't have a package manager.
Yes it does - it has apt-get (or yum...). 
It integrates with other c libraries, all of which I've managed using synaptic.
Plus, you need to run autovala update && cd ./install && cmake ..
Use autovala. 

I don't think I could do libsdx using Nim.
Putting all of the code in one file is nuts, how do you manage complexity.
FSharp is almost as bad, the only reason it is manageable is Visual Studio 2015.
Scala has the right infrastructure design, but the implementation is so slow, and broken.

So, if I add up Vala + Autovala + VSCode, I get the most productive enviroment i've found 
outside of dart.









