# todo


'There are no levels, no game over, no score, no lives - that's next.'

The existing design work for this is done using overlap2d

* &#10004; load images from overlap2d pack.atlas
* &loz; load overlap2d library items
* &loz; load scenes
* &loz; load ui buttons
* &loz; load ut 9patch




    project.dt
    scenes/MenuScene.dt
    scenes/MainScene.dt
    scenes/OptionScene.dt
    scenes/LeaderboardScene.dt
    orig/pack.atlas
    orig/pack.png


    these are packed into a gresource and made available using liboverlap2d.

// unpack player image:
var project = Overlap2D.load("resource:///darkoverlordofdata/shmupwarz")
var o = project.libraryItem["player"]
var r = rect(o.x, o.y. o.width, o.height)
var s = SDL_LoadBMP("resource:///darkoverlordofdata/shmupwarz/orig/pack.png")
SDL_GetClipRect(s, r)


    ShmupWarz.Menu          - MenuScene
    ShmupWarz.Game          - MainScene
    ShmupWarz.Options       - OptionScene
    ShmupWarz.Leaderboard   - LeaderboardScene
