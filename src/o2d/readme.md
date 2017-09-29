# Overlap2D

inspired by https://github.com/UnderwaterApps/overlap2d-runtime-libgdx

        Overlay2D data is exported and embedded 
        into the application as a gresource:


            ShmupWarz.exe:
            =========================
            | project.dt            |
            | scene-n.dt            |
            | => pack.png           |
            | => pack.atlas         |
            | => *.wav, *.ttf       |
            |-----------------------|
            |  Game                 |
            |  Program              |
            |  => gresource         |
            =========================


```
var prj = Overlap2D.load("resource:///darkoverlordofdata/shmupwarz")

```            