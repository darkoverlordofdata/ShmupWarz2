/**
 * CustomVariables.gs
 *
 * 
 *
 */
[indent=4]
uses Gee
uses GLib
uses o2d.data

namespace o2d.utils

    class CustomVariables
    
        variables: private dict of string,string = new dict of string,string

        def loadFromString(varString: string)
            variables.clear()
            var vars = varString.split(";")
            for var variable in vars
                var tmp = variable.split(":")
                if tmp.length > 1
                    setVariable(tmp[0], tmp[1])

        def saveAsString(): string
            var result = new array of string[0]
            for entry in variables.entries
                var key = entry.key
                var value = entry.value
                result += (key + ":" + value)
            return string.joinv(";", result)

        def setVariable(key: string, value: string)
            variables.@set(key, value)
        
        def removeVariable(key: string)
            value: string
            variables.unset(key, out value)

        def getStringVariable(key: string): string
            return variables.@get(key)

        def getIntegerVariable(key: string): int
            return int.parse(variables.@get(key))

        def getFloatVariable(key: string): double
            return double.parse(variables.@get(key))

        def getHashMap(): dict of string,string
            return variables

        def getCount(): int
            return variables.size
            