
### Performance



ooc	        vala	    nim	        scala	    fsharp
0.001599	0.003665	0.002157	0.009821	0.000434
0.002211	0.003552	0.003744	0.009488	0.000749
0.002336	0.003787	0.003610	0.009006	0.001001
0.002737	0.003928	0.003375	0.008735	0.001405
0.002556	0.003575	0.003305	0.008365	0.001913
0.002606	0.003291	0.003783	0.007986	0.001974
0.002609	0.004047	0.003533	0.007624	0.002111
0.002563	0.003322	0.003357	0.007325	0.001859
0.003080	0.003354	0.003385	0.006917	0.002503
0.003568	0.003347	0.003166	0.006587	0.002564
========    ========    ========    ========    ========
0.002586	0.003586	0.003331	0.008185	0.001651

avg usec per 10,000 frames:

scala   0.008185	libgdx
vala	0.003586	libsdx (sdl2)
nim     0.003331	sdl2
ooc     0.002586    sdl2
fsharp  0.001651    monogame



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









