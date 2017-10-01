* On linux, files and resources both use slash. On windows, Gio returns filenames with a back slash. These need to be normalized for resources.
* On windows, need to strip trailing CR when parsing the pack.atlas
