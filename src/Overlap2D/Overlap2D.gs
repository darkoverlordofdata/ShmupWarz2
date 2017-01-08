[indent=4]
/**
 * load overlap2d project.dt
 * inspired by https://github.com/UnderwaterApps/overlap2d-runtime-libgdx
 *
 *  project
 *      resolution
 *      library
 *          composite
 *              sImage9patchs
 *              sLabels
 *               layers
 *      scenes [1..n]
 *          sceneName
 *          physicsPropertiesVO
 *          verticalGuides
 *          horizontalGuides
 *          composite
 *              sImages
 *              sLabels
 *              layers
 *
 */
namespace Overlap2D

    /**
     * load Overlap2D values for the project at URI/project.dt
     */
    // def load(uri: string): ProjectInfoVO
    //     return new ProjectInfoVO(loadJson(readStream(@"$uri/project.dt")))

    /**
     * load the remaining scene data from URI/scenes/<SceneName>.dt
     */
    // def private loadScene(uri: string, scene: SceneVO)
    //     var name = scene.sceneName
    //     var stream = readStream(@"$uri/scenes/$name.dt")
        //scene.load(loadJson(stream))

    /**
     * read in the stream, either from file or gresource
     */
    def private readStream(path: string) : InputStream
        if path.index_of("resource:///") == 0
            return GLib.resources_open_stream(path.substring(11), 0)
        else
            var project = File.new_for_path(path)
            if project.query_exists()
                return project.read()
            else
                print "o2d project file %s not found", path
                return null

    /**
     * read and parse the json object from the stream
     *
     * @param stream the input stream
     * @return the Json.Object
     */
    def private loadJson(stream: InputStream): Json.Object
        var st = new BufferedInputStream(stream)
        var sb = new StringBuilder()
        buffer: array of uint8 = new array of uint8[100]
        size: ssize_t

        var ready = true
        while ready
            size = st.read(buffer)
            if size > 0
                sb.append_len((string) buffer, size)
            else
                ready = false

        var parser = new Json.Parser()
        parser.load_from_data(sb.str, -1)
        return parser.get_root().get_object()


