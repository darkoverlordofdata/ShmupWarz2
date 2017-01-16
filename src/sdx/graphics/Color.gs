[indent=4]
/**
 * Color.gs
 *
 * Copyright 2016 Dark Overlord of Data
 * This library is free software you can redistribute it and/or
 * modify it under the terms of the he MIT License (MIT).
 *
 * Author: 
 *      bruce davidson
 */
uses Gee
uses SDL
uses GLib

namespace sdx.graphics

    class Color:  Object

        r: double
        g: double
        b: double
        a: double
        obj: Video.Color

        /** 
         *  values
         */
        prop static readonly CLEAR          : Color = new Color.rgba(0, 0, 0, 0) 
        prop static readonly BLACK          : Color = new Color.rgba(0, 0, 0, 1)
        prop static readonly WHITE          : Color = new Color(0xffffffff)
        prop static readonly LIGHT_GRAY     : Color = new Color(0xbfbfbfff)
        prop static readonly GRAY           : Color = new Color(0x7f7f7fff)
        prop static readonly DARK_GRAY      : Color = new Color(0x3f3f3fff)
        prop static readonly BLUE           : Color = new Color.rgba(0, 0, 1, 1)
        prop static readonly NAVY           : Color = new Color.rgba(0, 0, 0.5f, 1)
        prop static readonly ROYAL          : Color = new Color(0x4169e1ff)
        prop static readonly SLATE          : Color = new Color(0x708090ff)
        prop static readonly SKY            : Color = new Color(0x87ceebff)
        prop static readonly CYAN           : Color = new Color.rgba(0, 1, 1, 1)
        prop static readonly TEAL           : Color = new Color.rgba(0, 0.5f, 0.5f, 1)
        prop static readonly GREEN          : Color = new Color(0x00ff00ff)
        prop static readonly CHARTREUSE     : Color = new Color(0x7fff00ff)
        prop static readonly LIME           : Color = new Color(0x32cd32ff)
        prop static readonly FOREST         : Color = new Color(0x228b22ff)
        prop static readonly OLIVE          : Color = new Color(0x6b8e23ff)
        prop static readonly YELLOW         : Color = new Color(0xffff00ff)
        prop static readonly GOLD           : Color = new Color(0xffd700ff)
        prop static readonly GOLDENROD      : Color = new Color(0xdaa520ff)
        prop static readonly ORANGE         : Color = new Color(0xffa500ff)
        prop static readonly BROWN          : Color = new Color(0x8b4513ff)
        prop static readonly TAN            : Color = new Color(0xd2b48cff)
        prop static readonly FIREBRICK      : Color = new Color(0xb22222ff)
        prop static readonly RED            : Color = new Color(0xff0000ff)
        prop static readonly SCARLET        : Color = new Color(0xff341cff)
        //prop static readonly CORAL          : Color = new Color(0xff7f50ff)
        prop static readonly SALMON         : Color = new Color(0xfa8072ff)
        prop static readonly PINK           : Color = new Color(0xff69b4ff)
        prop static readonly MAGENTA        : Color = new Color.rgba(1, 0, 1, 1)
        prop static readonly PURPLE         : Color = new Color(0xa020f0ff)
        prop static readonly VIOLET         : Color = new Color(0xee82eeff)
        prop static readonly MAROON         : Color = new Color(0xb03060ff)
        prop static readonly TransparentBlack: Color = new Color(0x00000000)
        prop static readonly TransparentWhite: Color = new Color(0xffffffff)
        prop static readonly AliceBlue       : Color = new Color(0xf0f8ffff)
        prop static readonly AntiqueWhite    : Color = new Color(0xEBD7D7FA)
        prop static readonly Aqua            : Color = new Color(0xFFFFFF00)
        prop static readonly Aquamarine      : Color = new Color(0xFFD4D47F)
        prop static readonly Azure           : Color = new Color(0xFFFFFFF0)
        prop static readonly Beige           : Color = new Color(0xf5dcdcf5)
        prop static readonly Bisque          : Color = new Color(0xe4c4c4ff)
        prop static readonly Black           : Color = new Color(0x00000000)
        prop static readonly BlanchedAlmond  : Color = new Color(0xebcdcdff)
        prop static readonly Blue            : Color = new Color(0x00ffff00)
        prop static readonly BlueViolet      : Color = new Color(0x2be2e28a)
        prop static readonly Brown           : Color = new Color(0x2a2a2aa5)
        prop static readonly BurlyWood       : Color = new Color(0xb88787de)
        prop static readonly CadetBlue       : Color = new Color(0x9ea0a05f)
        prop static readonly Chartreuse      : Color = new Color(0xff00007f)
        prop static readonly Chocolate       : Color = new Color(0x691e1ed2)
        prop static readonly Coral           : Color = new Color(0x7f5050ff)
        prop static readonly CornflowerBlue  : Color = new Color(0x95eded64)
        prop static readonly Cornsilk        : Color = new Color(0xf8dcdcff)
        prop static readonly Crimson         : Color = new Color(0x143c3cdc)
        prop static readonly Cyan            : Color = new Color(0xffffff00)
        prop static readonly DarkBlue        : Color = new Color(0x008b8b00)
        prop static readonly DarkCyan        : Color = new Color(0x8b8b8b00)
        prop static readonly DarkGoldenrod   : Color = new Color(0x860b0bb8)
        prop static readonly DarkGray        : Color = new Color(0xa9a9a9a9)
        prop static readonly DarkGreen       : Color = new Color(0x64000000)
        prop static readonly DarkKhaki       : Color = new Color(0xb76b6bbd)
        prop static readonly DarkMagenta     : Color = new Color(0x008b8b8b)
        prop static readonly DarkOliveGreen  : Color = new Color(0x6b2f2f55)
        prop static readonly DarkOrange      : Color = new Color(0x8c0000ff)
        prop static readonly DarkOrchid      : Color = new Color(0x32cccc99)
        prop static readonly DarkRed         : Color = new Color(0x0000008b)
        prop static readonly DarkSalmon      : Color = new Color(0x967a7ae9)
        prop static readonly DarkSeaGreen    : Color = new Color(0xbc8b8b8f)
        prop static readonly DarkSlateBlue   : Color = new Color(0x3d8b8b48)
        prop static readonly DarkSlateGray   : Color = new Color(0x4f4f4f2f)
        prop static readonly DarkTurquoise   : Color = new Color(0xced1d100)
        prop static readonly DarkViolet      : Color = new Color(0x00d3d394)
        prop static readonly DeepPink        : Color = new Color(0x149393ff)
        prop static readonly DeepSkyBlue     : Color = new Color(0xbfffff00)
        prop static readonly DimGray         : Color = new Color(0x69696969)
        prop static readonly DodgerBlue      : Color = new Color(0x90ffff1e)
        prop static readonly Firebrick       : Color = new Color(0x222222b2)
        prop static readonly FloralWhite     : Color = new Color(0xfaf0f0ff)
        prop static readonly ForestGreen     : Color = new Color(0x8b222222)
        prop static readonly Fuchsia         : Color = new Color(0x00ffffff)
        prop static readonly Gainsboro       : Color = new Color(0xdcdcdcdc)
        prop static readonly GhostWhite      : Color = new Color(0xf8fffff8)
        prop static readonly Gold            : Color = new Color(0xd70000ff)
        prop static readonly Goldenrod       : Color = new Color(0xa52020da)
        prop static readonly Gray            : Color = new Color(0x80808080)
        prop static readonly Green           : Color = new Color(0x80000000)
        prop static readonly GreenYellow     : Color = new Color(0xff2f2fad)
        prop static readonly Honeydew        : Color = new Color(0xfff0f0f0)
        prop static readonly HotPink         : Color = new Color(0x69b4b4ff)
        prop static readonly IndianRed       : Color = new Color(0x5c5c5ccd)
        prop static readonly Indigo          : Color = new Color(0x0082824b)
        prop static readonly Ivory           : Color = new Color(0xfff0f0ff)
        prop static readonly Khaki           : Color = new Color(0xe68c8cf0)
        prop static readonly Lavender        : Color = new Color(0xe6fafae6)
        prop static readonly LavenderBlush   : Color = new Color(0xf0f5f5ff)
        prop static readonly LawnGreen       : Color = new Color(0xfc00007c)
        prop static readonly LemonChiffon    : Color = new Color(0xfacdcdff)
        prop static readonly LightBlue       : Color = new Color(0xd8e6e6ad)
        prop static readonly LightCoral      : Color = new Color(0x808080f0)
        prop static readonly LightCyan       : Color = new Color(0xffffffe0)
        prop static readonly LightGoldenrodYellow : Color = new Color(0xfad2d2fa)
        prop static readonly LightGray       : Color = new Color(0xd3d3d3d3)
        prop static readonly LightGreen      : Color = new Color(0xee909090)
        prop static readonly LightPink       : Color = new Color(0xb6c1c1ff)
        prop static readonly LightSalmon     : Color = new Color(0xa07a7aff)
        prop static readonly LightSeaGreen   : Color = new Color(0xb2aaaa20)
        prop static readonly LightSkyBlue    : Color = new Color(0xcefafa87)
        prop static readonly LightSlateGray  : Color = new Color(0x88999977)
        prop static readonly LightSteelBlue  : Color = new Color(0xc4dedeb0)
        prop static readonly LightYellow     : Color = new Color(0xffe0e0ff)
        prop static readonly Lime            : Color = new Color(0xff000000)
        prop static readonly LimeGreen       : Color = new Color(0xcd323232)
        prop static readonly Linen           : Color = new Color(0xf0e6e6fa)
        prop static readonly Magenta         : Color = new Color(0x00ffffff)
        prop static readonly Maroon          : Color = new Color(0x00000080)
        prop static readonly MediumAquamarine: Color = new Color(0xcdaaaa66)
        prop static readonly MediumBlue      : Color = new Color(0x00cdcd00)
        prop static readonly MediumOrchid    : Color = new Color(0x55d3d3ba)
        prop static readonly MediumPurple    : Color = new Color(0x70dbdb93)
        prop static readonly MediumSeaGreen  : Color = new Color(0xb371713c)
        prop static readonly MediumSlateBlue : Color = new Color(0x68eeee7b)
        prop static readonly MediumSpringGreen : Color = new Color(0xfa9a9a00)
        prop static readonly MediumTurquoise : Color = new Color(0xd1cccc48)
        prop static readonly MediumVioletRed : Color = new Color(0x158585c7)
        prop static readonly MidnightBlue    : Color = new Color(0x19707019)
        prop static readonly MintCream       : Color = new Color(0xfffafaf5)
        prop static readonly MistyRose       : Color = new Color(0xe4e1e1ff)
        prop static readonly Moccasin        : Color = new Color(0xe4b5b5ff)
        prop static readonly MonoGameOrange  : Color = new Color(0x3c0000e7)
        prop static readonly NavajoWhite     : Color = new Color(0xdeadadff)
        prop static readonly Navy            : Color = new Color(0x00808000)
        prop static readonly OldLace         : Color = new Color(0xf5e6e6fd)
        prop static readonly Olive           : Color = new Color(0x80000080)
        prop static readonly OliveDrab       : Color = new Color(0x8e23236b)
        prop static readonly Orange          : Color = new Color(0xa50000ff)
        prop static readonly OrangeRed       : Color = new Color(0x450000ff)
        prop static readonly Orchid          : Color = new Color(0x70d6d6da)
        prop static readonly PaleGoldenrod   : Color = new Color(0xe8aaaaee)
        prop static readonly PaleGreen       : Color = new Color(0xfb989898)
        prop static readonly PaleTurquoise   : Color = new Color(0xeeeeeeaf)
        prop static readonly PaleVioletRed   : Color = new Color(0x709393db)
        prop static readonly PapayaWhip      : Color = new Color(0xefd5d5ff)
        prop static readonly PeachPuff       : Color = new Color(0xdab9b9ff)
        prop static readonly Peru            : Color = new Color(0x853f3fcd)
        prop static readonly Pink            : Color = new Color(0xc0cbcbff)
        prop static readonly Plum            : Color = new Color(0xa0dddddd)
        prop static readonly PowderBlue      : Color = new Color(0xe0e6e6b0)
        prop static readonly Purple          : Color = new Color(0x00808080)
        prop static readonly Red             : Color = new Color(0x000000ff)
        prop static readonly RosyBrown       : Color = new Color(0x8f8f8fbc)
        prop static readonly RoyalBlue       : Color = new Color(0x69e1e141)
        prop static readonly SaddleBrown     : Color = new Color(0x4513138b)
        prop static readonly Salmon          : Color = new Color(0x807272fa)
        prop static readonly SandyBrown      : Color = new Color(0xa46060f4)
        prop static readonly SeaGreen        : Color = new Color(0x8b57572e)
        prop static readonly SeaShell        : Color = new Color(0xf5eeeeff)
        prop static readonly Sienna          : Color = new Color(0x522d2da0)
        prop static readonly Silver          : Color = new Color(0xc0c0c0c0)
        prop static readonly SkyBlue         : Color = new Color(0xceebeb87)
        prop static readonly SlateBlue       : Color = new Color(0x5acdcd6a)
        prop static readonly SlateGray       : Color = new Color(0x80909070)
        prop static readonly Snow            : Color = new Color(0xfafafaff)
        prop static readonly SpringGreen     : Color = new Color(0xff7f7f00)
        prop static readonly SteelBlue       : Color = new Color(0x82b4b446)
        prop static readonly Tan             : Color = new Color(0xb48c8cd2)
        prop static readonly Teal            : Color = new Color(0x80808000)
        prop static readonly Thistle         : Color = new Color(0xbfd8d8d8)
        prop static readonly Tomato          : Color = new Color(0x634747ff)
        prop static readonly Turquoise       : Color = new Color(0xe0d0d040)
        prop static readonly Violet          : Color = new Color(0x82eeeeee)
        prop static readonly Wheat           : Color = new Color(0xdeb3b3f5)
        prop static readonly White           : Color = new Color(0xFFFFFFFF)
        prop static readonly WhiteSmoke      : Color = new Color(0xf5f5f5f5)
        prop static readonly Yellow          : Color = new Color(0xff0000ff)
        prop static readonly YellowGreen     : Color = new Color(0xcd32329a)

        construct(value: int64)
            
            obj.r = (uint8) ((value & 0xff000000) >> 24)
            obj.g = (uint8) ((value & 0x00ff0000) >> 16)
            obj.b = (uint8) ((value & 0x0000ff00) >> 8)
            obj.a = (uint8) ((value & 0x000000ff))
            this.r = obj.r / 255
            this.g = obj.g / 255
            this.b = obj.b / 255
            this.a = obj.a / 255

        construct rgba(r: double, g: double, b: double, a:double)

            obj.r = (uint8) (255 * r)
            obj.g = (uint8) (255 * g)
            obj.b = (uint8) (255 * b)
            obj.a = (uint8) (255 * a)
            this.r = r
            this.g = g
            this.b = b
            this.a = a
            clamp()

        construct clone(color: Color)   
            @set(color)


        def @set(color: Color): Color
            this.r = color.r
            this.g = color.g
            this.b = color.b
            this.a = color.a
            return this
            
            
        def clamp(): Color  
            if r < 0
                r = 0
            else if r > 1 do r = 1
            if g < 0
                g = 0
            else if g > 1 do g = 1
            if b < 0
                b = 0
            else if b > 1 do b = 1
            if a < 0
                a = 0
            else if a > 1 do a = 1
            return this

        // def toDoubleBits (): double
        //     int color = ((int)(255 * a) << 24) | ((int)(255 * b) << 16) | ((int)(255 * g) << 8) | ((int)(255 * r))
        //     return NumberUtils.intToFloatColor(color)
        // }
        def toIntBits(): int
            bits:int = ((int)(255 * a) << 24) | ((int)(255 * b) << 16) | ((int)(255 * g) << 8) | ((int)(255 * r))
            return bits
        

            