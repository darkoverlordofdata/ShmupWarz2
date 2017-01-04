# ShmupWarz

Reboot. this is the master branch.

## status

export overlap2d to data folder, and package with gresource.

works great, but fails commit to github. 
gresource generates a .c source file 113 mb.
Git won't accept file larger than 100mb.

113 mb of .c code.
wow.

I'll have to precompile into a seperate resource .so Then it will be more like a 10mb binary image.


Desktop version references shared libraries: libbosco & libentitas

resources are embeded using gresource

vscode + autovala = RAD 

## install
```
sudo add-apt-repository ppa:darkoverlordofdata/bosco
sudo apt-get update
sudo apt-get shmupwarz
```

## build
```
sudo apt-get install build-essential cmake valac bzr
sudo apt-get install libsdl2-dev libsdl2-image-dev libsdl2-mixer-dev libsdl2-ttf-dev libsdl2-net-dev  
sudo add-apt-repository ppa:darkoverlordofdata/bosco
sudo apt-get update
sudo apt-get install libbosco, libentitas
bzr branch lp:~darkoverlordofdata/+junk/shmupwarz
cd shmupwarz
mkdir install
cd install
cmake ..
make
sudo make install
shmupwarz
```

