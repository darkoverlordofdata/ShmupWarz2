# todo


'There are no levels, no game over, no score, no lives - that's next.'

The existing design work for this is done using overlap2d.
Bosco can now load sprites from pack.atlas:

* &#10004; load images from overlap2d pack.atlas
* &loz; load overlap2d library items
* &loz; load scenes
* &loz; load ui buttons
* &loz; load ut 9patch

There is so much functinality in libgdx...

I need a liteweight version of libgdx in vala -
libsdx  - uses SDL, not OpenGL - 2d only


    project.dt
    scenes/MenuScene.dt
    scenes/MainScene.dt
    scenes/OptionScene.dt
    scenes/LeaderboardScene.dt
    orig/pack.atlas
    orig/pack.png



    ShmupWarz.Menu          - MenuScene
    ShmupWarz.Game          - MainScene
    ShmupWarz.Options       - OptionScene
    ShmupWarz.Leaderboard   - LeaderboardScene
