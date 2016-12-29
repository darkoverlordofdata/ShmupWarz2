# why vala?

After all, I considered it once before, and rejected it due to performance concerns.
Since I am unable to reproduce those issues, I am assuming they were one-off environmental issues.

Vala is stable. 

For comparison, I started with a typescript port. It works well, but in the last year, 
4 minor revisions to typescript came with breaking changes. I still haven't figured out
how to address the most recent changes. I'm an independant developer, I don't have the resources
to continously revise my code and workflow.

That is extreme. What about the Nim port? I took a break to upgrade my laptop and play with windows 10. 
Windows 10 led to Xamarin, that led to FSharp. A month later when I re-opened the nim project, 
it no longer worked, due to breaking chages. I fixed them, but it got me thinking.

So I reopened my kotlin project. Same thing. Not working on the current version of the compiler. 
Then I tried my scala project. I could compile but not build. Gradle had breaking changes.
It's contaigious.

So I tried the vala version. I was written for vala 0.22.1. My new laptop and new OS installed vala 
version 0.34.4. My code compiled without incident. It ran just fine. I tried it on Windows - I had
upgraded from Windows7 to Windows10. It compiled and ran with no surprises.

My whole view of vala has done a 180. I can put my code down, and when I pick it back up, I don't
have to re-learn the language. Wy does this seem so unique? The only other project that still worked
out of the box was the FSharp version. It is a strong candidate, and has support for Android and even 
HTML5, with the Fable project. 

So it came down to performance. Vala has flatter performance. FSharp can be up to 5x faster, but them
gets performance dips, and the result is a bit of stuttering. Not much, but it's there.

It is possible to put vala on an android, there is an example game. HTML5 is a nice to have, hopefully
enscriptem would be able to compile the c outputs from valac.

