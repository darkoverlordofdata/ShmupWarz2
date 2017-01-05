[indent=4]

namespace Overlap2D

    def parse(target:Object, json: Json.Object)

        if target isa CompositeItemVO
            var it = (CompositeItemVO)target

            if json.has_member("height")
                it.height = (double)json.get_double_member("height")

            if json.has_member("width")
                it.width = (double)json.get_double_member("width")
            