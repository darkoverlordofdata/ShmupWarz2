# ShmupWarz
Give Me Those Shmup Wars

## status

This is not a finished game - just endless waves of enemies and an endless supply of bullets. 
There are no levels, no game over, no score, no lives - that's next. 


## install
```
xenial & zesty:

sudo add-apt-repository ppa:darkoverlordofdata/bosco
sudo apt-get update
sudo apt-get shmupwarz
```

other - this works on Trisqel7 (Trusty)
[ShmupWarz-x86_64.AppImage download](https://github.com/darkoverlordofdata/ShmupWarz/releases/download/v0.0.1-alpha/ShmupWarz-x86_64.AppImage) 


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

