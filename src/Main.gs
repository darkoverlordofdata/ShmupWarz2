/**
 *  Main.gs
 *
 * Program entry point. 
 * Calculate the resource root location.
 *
 */
[indent=4]
def main(args: array of string)

    var root = ""
    var path = GLib.FileUtils.read_link("/proc/self/exe")

    /* installed system program */
    if path.index_of("/usr/bin") == 0

        root = Constants.DATADIR

    /* installed local program */
    else if path.index_of("/usr/local/bin") == 0

        root = Constants.DATADIR

    /* AppImage?  - /tmp/????/usr/bin */
    else if path.index_of("/tmp/") == 0

        if Regex.match_simple("\\/tmp\\/.*\\/usr/bin", path)
            root = File.new_for_path(path).resolve_relative_path("../../../").get_path()
            
        else
            print "Invalid /tmp/ path %s", path

    else              

        /* dev - use autovala local data */
        var check = File.new_for_path(path).resolve_relative_path("../../../data/local/")
        if check.query_exists()
            root = check.get_path()

        /* dev - use project folder */
        else
            root = File.new_for_path(path).resolve_relative_path("../../../").get_path()
    
    var game = new ShmupWarz.Game(root)
    game.Run()


