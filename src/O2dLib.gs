/**
 * Entities.gs
 *
 * IEntity factory
 *
 */
[indent=4]
uses Entitas
uses GLib
uses sdx
uses sdx.utils
uses sdx.graphics.s2d
uses o2d.data


namespace ShmupWarz

    /**
     * O2dLib
     *
     * load items from the Overlap2D Library
     */
    class O2dLib

        const PROJECT: string = "project.dt"        /** Overlap2D Project data */
        const SCENE: string = "scenes/MainScene.dt" /** Overlap2D Scene data */
        const ATLAS: string = "orig/pack.atlas"     /** Overlap2D Packed atlas */

        _spritesCache: static TextureAtlas
        _projectInfoCache: static ProjectInfoVO
        _sceneCache: static SceneVO

        prop static project: ProjectInfoVO
            get
                if _projectInfoCache == null
                    var file = Sdx.files.resource(PROJECT)
                    var json = JSON.parse(file.read())
                    _projectInfoCache = new ProjectInfoVO(json)
                return _projectInfoCache

        prop static scene: SceneVO
            get
                if _sceneCache == null
                    var file = Sdx.files.resource(SCENE)
                    var json = JSON.parse(file.read())
                    _sceneCache = new SceneVO(json)
                return _sceneCache

        prop static sprites: TextureAtlas
            get
                if _spritesCache == null
                    var packFile = Sdx.files.resource(ATLAS)
                    _spritesCache = new TextureAtlas.file(packFile)
                return _spritesCache
                  
        
        def static getItem(name:string):CompositeItemVO
            return project.libraryItems[name]

        def static getResource(name:string):string 
            return getItem(name).composite.sImages[0].imageName

        def static getSprite(name:string):Sprite
            return sprites.createSprite(getResource(name))

        def static getLayer(name:string): int
            // print "getLayer(%s) = %d", name, Layer.fromName(getItem(name).layerName.up())
            return layerFromName(getItem(name).layerName.up())

        def static effectFromName(name: string): Effect
            case name
                when "bang"
                    return Effect.SMALLASPLODE
                when "bullet"
                    return Effect.PEW
                when "explosion"
                    return Effect.ASPLODE
            return 0
            

        def static layerFromName(name: string): Layer
            case name
                when "DEFAULT"
                    return Layer.DEFAULT
                when "BACKGROUND"
                    return Layer.BACKGROUND
                when "TEXT"
                    return Layer.TEXT
                when "LIVES"
                    return Layer.LIVES
                when "MINES"
                    return Layer.MINES
                when "ACTORS_1"
                    return Layer.ACTORS_1
                when "ACTORS_2"
                    return Layer.ACTORS_2
                when "ACTORS_3"
                    return Layer.ACTORS_3
                when "PLAYER"
                    return Layer.PLAYER
                when "BULLET"
                    return Layer.BULLET
                when "PARTICLE"
                    return Layer.PARTICLE
                when "HUD"
                    return Layer.HUD
            return 0

                