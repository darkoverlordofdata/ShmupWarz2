[indent=4]
/**
 * Files.gs
 *
 * Author: 
 *      bruce davidson
 */

uses GLib
uses sdx.files

namespace sdx

    enum FileType
        Internal
        Resource
        External
        Absolute
        Local

        
    class Files : Object

        const static seperator: string = "/"

        // prop static readonly seperator: string = "/" //DIR_SEPARATOR_S
        prop readonly isResource: bool
        prop readonly resourcePath: string

        construct(resourcePath: string)
            if resourcePath.index_of("resource:///") == 0
                _isResource = true
                _resourcePath = resourcePath.substring(11)
            else
                _resourcePath = resourcePath

        def getHandle(path: string, type: FileType): FileHandle
            return new FileHandle(path, type)
            
        def @internal(path: string): FileHandle
            return new FileHandle(path, FileType.Internal)

        def resource(path: string): FileHandle
            return new FileHandle(path, FileType.Resource)

        def external(path: string): FileHandle
            return new FileHandle(path, FileType.External)

        def absolute(path: string): FileHandle
            return new FileHandle(path, FileType.Absolute)

        def local(path: string): FileHandle
            return new FileHandle(path, FileType.Local)


