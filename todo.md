# todo

## overlap2d support

export overlap2d to project/data folder. 
use grrr to pack o2d.gresource.xml


liboverlap2d

var r = Overlap2D.load_resources("/com/darkoverlordofdata/shmupwarz")

r.pixelToWorld = 2
r.originalResolution.name = "orig"
r.originalResolution.width = 1920
r.originalResolution.height = 1200
r.scenes[0].sceneName = "MainScene"
r.scenes[0].physicsPropertiesVO = {}
r.scenes[1].sceneName = "OptionsScene"
r.scenes[1].physicsPropertiesVO = {}
r.scenes[2].sceneName = "LeaderboardScene"
r.scenes[2].physicsPropertiesVO = {}
r.scenes[3].sceneName = "MenuScene"
r.scenes[3].physicsPropertiesVO = {}
r.libraryItems["optionButton"] = 