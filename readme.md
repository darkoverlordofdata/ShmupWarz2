# ShmupWarz
Give Me Those Shmup Wars

## status
active
Main branch - Reboot #2 - wip

replacing bosco with libsdx

libsdx is inspired by libgdx. Similar shape to the api hierarchy,
but much simpler - uses SDL and Vala/Genie rather than  OpenGL and Java

switching to included lib's rather than shared libraries.
little difference in executable size or load time.
no difference in performance.
distro is only dependant on:
    SDL2_image
    SDL2_mixer
    SDL2_ttf
    sdl2
    gee-0.8
    json-glib-1.0
    gio-2.0
    glib-2.0
    gobject-2.0

### Compiling on Linux

    mkdir install
    cd install
    cmake  ..
    make

### Compiling on Windows 10 + msys2
Changes cannot be made to the project structure from windows.

    mkdir install
    cd install
    cmake -G "MSYS Makefiles" ..
    make
