
### Performance

### Performance

avg usec per frame after 10,000 frames:

fsharp          0.001651
scala-native    0.001812
ooc             0.002586
nim             0.003331	
vala	        0.003586	
scala-jvm       0.008185	


## status
all of the associated code has been ported from the Scala version. This includes
* shmupwarz-scala
* libgdx
* overlap2d-runtime-libgdx

working...just the core game. Next is getting the other screens working.

Should I go back to including lib as source code? This is how ooc & nim work. 
The only dependancies would be the sdl2.so
Potentially better optimization, better portability.


suppose there were a gui for editing entitas.json, selecting resources, configuring packaging. 
click on run to profile 


