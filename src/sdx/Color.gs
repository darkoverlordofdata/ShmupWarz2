/**
 * Color.gs
 *
 * Copyright 2016 Dark Overlord of Data
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the he MIT License (MIT).
 *
 * Author: 
 *      bruce davidson
 */
[indent=4]

uses SDL

namespace sdx

    /**
     * Define standard color rgba values
     */
    class Colorz
        TransparentBlack: static Video.Color = Video.Color() {b = 0x00, g = 0x00, r = 0x00, a = 0x00};
        TransparentWhite: static Video.Color = Video.Color() {b = 0xFF, g = 0xFF, r = 0xFF, a = 0xFF};
        AliceBlue       : static Video.Color = Video.Color() {b = 0xFF, g = 0xF8, r = 0xF0, a = 0xFF};
        AntiqueWhite    : static Video.Color = Video.Color() {b = 0xD7, g = 0xEB, r = 0xFA, a = 0xFF};
        Aqua            : static Video.Color = Video.Color() {b = 0xFF, g = 0xFF, r = 0x00, a = 0xFF};
        Aquamarine      : static Video.Color = Video.Color() {b = 0xD4, g = 0xFF, r = 0x7F, a = 0xFF};
        Azure           : static Video.Color = Video.Color() {b = 0xFF, g = 0xFF, r = 0xF0, a = 0xFF};
        Beige           : static Video.Color = Video.Color() {b = 0xdc, g = 0xf5, r = 0xf5, a = 0xFF};
        Bisque          : static Video.Color = Video.Color() {b = 0xc4, g = 0xe4, r = 0xff, a = 0xFF};
        Black           : static Video.Color = Video.Color() {b = 0x00, g = 0x00, r = 0x00, a = 0xFF};
        BlanchedAlmond  : static Video.Color = Video.Color() {b = 0xcd, g = 0xeb, r = 0xff, a = 0xFF};
        Blue            : static Video.Color = Video.Color() {b = 0xff, g = 0x00, r = 0x00, a = 0xFF};
        BlueViolet      : static Video.Color = Video.Color() {b = 0xe2, g = 0x2b, r = 0x8a, a = 0xFF};
        Brown           : static Video.Color = Video.Color() {b = 0x2a, g = 0x2a, r = 0xa5, a = 0xFF};
        BurlyWood       : static Video.Color = Video.Color() {b = 0x87, g = 0xb8, r = 0xde, a = 0xFF};
        CadetBlue       : static Video.Color = Video.Color() {b = 0xa0, g = 0x9e, r = 0x5f, a = 0xFF};
        Chartreuse      : static Video.Color = Video.Color() {b = 0x00, g = 0xff, r = 0x7f, a = 0xFF};
        Chocolate       : static Video.Color = Video.Color() {b = 0x1e, g = 0x69, r = 0xd2, a = 0xFF};
        Coral           : static Video.Color = Video.Color() {b = 0x50, g = 0x7f, r = 0xff, a = 0xFF};
        CornflowerBlue  : static Video.Color = Video.Color() {b = 0xed, g = 0x95, r = 0x64, a = 0xFF};
        Cornsilk        : static Video.Color = Video.Color() {b = 0xdc, g = 0xf8, r = 0xff, a = 0xFF};
        Crimson         : static Video.Color = Video.Color() {b = 0x3c, g = 0x14, r = 0xdc, a = 0xFF};
        Cyan            : static Video.Color = Video.Color() {b = 0xff, g = 0xff, r = 0x00, a = 0xFF};
        DarkBlue        : static Video.Color = Video.Color() {b = 0x8b, g = 0x00, r = 0x00, a = 0xFF};
        DarkCyan        : static Video.Color = Video.Color() {b = 0x8b, g = 0x8b, r = 0x00, a = 0xFF};
        DarkGoldenrod   : static Video.Color = Video.Color() {b = 0x0b, g = 0x86, r = 0xb8, a = 0xFF};
        DarkGray        : static Video.Color = Video.Color() {b = 0xa9, g = 0xa9, r = 0xa9, a = 0xFF};
        DarkGreen       : static Video.Color = Video.Color() {b = 0x00, g = 0x64, r = 0x00, a = 0xFF};
        DarkKhaki       : static Video.Color = Video.Color() {b = 0x6b, g = 0xb7, r = 0xbd, a = 0xFF};
        DarkMagenta     : static Video.Color = Video.Color() {b = 0x8b, g = 0x00, r = 0x8b, a = 0xFF};
        DarkOliveGreen  : static Video.Color = Video.Color() {b = 0x2f, g = 0x6b, r = 0x55, a = 0xFF};
        DarkOrange      : static Video.Color = Video.Color() {b = 0x00, g = 0x8c, r = 0xff, a = 0xFF};
        DarkOrchid      : static Video.Color = Video.Color() {b = 0xcc, g = 0x32, r = 0x99, a = 0xFF};
        DarkRed         : static Video.Color = Video.Color() {b = 0x00, g = 0x00, r = 0x8b, a = 0xFF};
        DarkSalmon      : static Video.Color = Video.Color() {b = 0x7a, g = 0x96, r = 0xe9, a = 0xFF};
        DarkSeaGreen    : static Video.Color = Video.Color() {b = 0x8b, g = 0xbc, r = 0x8f, a = 0xFF};
        DarkSlateBlue   : static Video.Color = Video.Color() {b = 0x8b, g = 0x3d, r = 0x48, a = 0xFF};
        DarkSlateGray   : static Video.Color = Video.Color() {b = 0x4f, g = 0x4f, r = 0x2f, a = 0xFF};
        DarkTurquoise   : static Video.Color = Video.Color() {b = 0xd1, g = 0xce, r = 0x00, a = 0xFF};
        DarkViolet      : static Video.Color = Video.Color() {b = 0xd3, g = 0x00, r = 0x94, a = 0xFF};
        DeepPink        : static Video.Color = Video.Color() {b = 0x93, g = 0x14, r = 0xff, a = 0xFF};
        DeepSkyBlue     : static Video.Color = Video.Color() {b = 0xff, g = 0xbf, r = 0x00, a = 0xFF};
        DimGray         : static Video.Color = Video.Color() {b = 0x69, g = 0x69, r = 0x69, a = 0xFF};
        DodgerBlue      : static Video.Color = Video.Color() {b = 0xff, g = 0x90, r = 0x1e, a = 0xFF};
        Firebrick       : static Video.Color = Video.Color() {b = 0x22, g = 0x22, r = 0xb2, a = 0xFF};
        FloralWhite     : static Video.Color = Video.Color() {b = 0xf0, g = 0xfa, r = 0xff, a = 0xFF};
        ForestGreen     : static Video.Color = Video.Color() {b = 0x22, g = 0x8b, r = 0x22, a = 0xFF};
        Fuchsia         : static Video.Color = Video.Color() {b = 0xff, g = 0x00, r = 0xff, a = 0xFF};
        Gainsboro       : static Video.Color = Video.Color() {b = 0xdc, g = 0xdc, r = 0xdc, a = 0xFF};
        GhostWhite      : static Video.Color = Video.Color() {b = 0xff, g = 0xf8, r = 0xf8, a = 0xFF};
        Gold            : static Video.Color = Video.Color() {b = 0x00, g = 0xd7, r = 0xff, a = 0xFF};
        Goldenrod       : static Video.Color = Video.Color() {b = 0x20, g = 0xa5, r = 0xda, a = 0xFF};
        Gray            : static Video.Color = Video.Color() {b = 0x80, g = 0x80, r = 0x80, a = 0xFF};
        Green           : static Video.Color = Video.Color() {b = 0x00, g = 0x80, r = 0x00, a = 0xFF};
        GreenYellow     : static Video.Color = Video.Color() {b = 0x2f, g = 0xff, r = 0xad, a = 0xFF};
        Honeydew        : static Video.Color = Video.Color() {b = 0xf0, g = 0xff, r = 0xf0, a = 0xFF};
        HotPink         : static Video.Color = Video.Color() {b = 0xb4, g = 0x69, r = 0xff, a = 0xFF};
        IndianRed       : static Video.Color = Video.Color() {b = 0x5c, g = 0x5c, r = 0xcd, a = 0xFF};
        Indigo          : static Video.Color = Video.Color() {b = 0x82, g = 0x00, r = 0x4b, a = 0xFF};
        Ivory           : static Video.Color = Video.Color() {b = 0xf0, g = 0xff, r = 0xff, a = 0xFF};
        Khaki           : static Video.Color = Video.Color() {b = 0x8c, g = 0xe6, r = 0xf0, a = 0xFF};
        Lavender        : static Video.Color = Video.Color() {b = 0xfa, g = 0xe6, r = 0xe6, a = 0xFF};
        LavenderBlush   : static Video.Color = Video.Color() {b = 0xf5, g = 0xf0, r = 0xff, a = 0xFF};
        LawnGreen       : static Video.Color = Video.Color() {b = 0x00, g = 0xfc, r = 0x7c, a = 0xFF};
        LemonChiffon    : static Video.Color = Video.Color() {b = 0xcd, g = 0xfa, r = 0xff, a = 0xFF};
        LightBlue       : static Video.Color = Video.Color() {b = 0xe6, g = 0xd8, r = 0xad, a = 0xFF};
        LightCoral      : static Video.Color = Video.Color() {b = 0x80, g = 0x80, r = 0xf0, a = 0xFF};
        LightCyan       : static Video.Color = Video.Color() {b = 0xff, g = 0xff, r = 0xe0, a = 0xFF};
        LightGoldenrodYellow : static Video.Color = Video.Color() {b = 0xd2, g = 0xfa, r = 0xfa, a = 0xFF};
        LightGray       : static Video.Color = Video.Color() {b = 0xd3, g = 0xd3, r = 0xd3, a = 0xFF};
        LightGreen      : static Video.Color = Video.Color() {b = 0x90, g = 0xee, r = 0x90, a = 0xFF};
        LightPink       : static Video.Color = Video.Color() {b = 0xc1, g = 0xb6, r = 0xff, a = 0xFF};
        LightSalmon     : static Video.Color = Video.Color() {b = 0x7a, g = 0xa0, r = 0xff, a = 0xFF};
        LightSeaGreen   : static Video.Color = Video.Color() {b = 0xaa, g = 0xb2, r = 0x20, a = 0xFF};
        LightSkyBlue    : static Video.Color = Video.Color() {b = 0xfa, g = 0xce, r = 0x87, a = 0xFF};
        LightSlateGray  : static Video.Color = Video.Color() {b = 0x99, g = 0x88, r = 0x77, a = 0xFF};
        LightSteelBlue  : static Video.Color = Video.Color() {b = 0xde, g = 0xc4, r = 0xb0, a = 0xFF};
        LightYellow     : static Video.Color = Video.Color() {b = 0xe0, g = 0xff, r = 0xff, a = 0xFF};
        Lime            : static Video.Color = Video.Color() {b = 0x00, g = 0xff, r = 0x00, a = 0xFF};
        LimeGreen       : static Video.Color = Video.Color() {b = 0x32, g = 0xcd, r = 0x32, a = 0xFF};
        Linen           : static Video.Color = Video.Color() {b = 0xe6, g = 0xf0, r = 0xfa, a = 0xFF};
        Magenta         : static Video.Color = Video.Color() {b = 0xff, g = 0x00, r = 0xff, a = 0xFF};
        Maroon          : static Video.Color = Video.Color() {b = 0x00, g = 0x00, r = 0x80, a = 0xFF};
        MediumAquamarine: static Video.Color = Video.Color() {b = 0xaa, g = 0xcd, r = 0x66, a = 0xFF};
        MediumBlue      : static Video.Color = Video.Color() {b = 0xcd, g = 0x00, r = 0x00, a = 0xFF};
        MediumOrchid    : static Video.Color = Video.Color() {b = 0xd3, g = 0x55, r = 0xba, a = 0xFF};
        MediumPurple    : static Video.Color = Video.Color() {b = 0xdb, g = 0x70, r = 0x93, a = 0xFF};
        MediumSeaGreen  : static Video.Color = Video.Color() {b = 0x71, g = 0xb3, r = 0x3c, a = 0xFF};
        MediumSlateBlue : static Video.Color = Video.Color() {b = 0xee, g = 0x68, r = 0x7b, a = 0xFF};
        MediumSpringGreen : static Video.Color = Video.Color() {b = 0x9a, g = 0xfa, r = 0x00, a = 0xFF};
        MediumTurquoise : static Video.Color = Video.Color() {b = 0xcc, g = 0xd1, r = 0x48, a = 0xFF};
        MediumVioletRed : static Video.Color = Video.Color() {b = 0x85, g = 0x15, r = 0xc7, a = 0xFF};
        MidnightBlue    : static Video.Color = Video.Color() {b = 0x70, g = 0x19, r = 0x19, a = 0xFF};
        MintCream       : static Video.Color = Video.Color() {b = 0xfa, g = 0xff, r = 0xf5, a = 0xFF};
        MistyRose       : static Video.Color = Video.Color() {b = 0xe1, g = 0xe4, r = 0xff, a = 0xFF};
        Moccasin        : static Video.Color = Video.Color() {b = 0xb5, g = 0xe4, r = 0xff, a = 0xFF};
        MonoGameOrange  : static Video.Color = Video.Color() {b = 0x00, g = 0x3c, r = 0xe7, a = 0xFF};
        NavajoWhite     : static Video.Color = Video.Color() {b = 0xad, g = 0xde, r = 0xff, a = 0xFF};
        Navy            : static Video.Color = Video.Color() {b = 0x80, g = 0x00, r = 0x00, a = 0xFF};
        OldLace         : static Video.Color = Video.Color() {b = 0xe6, g = 0xf5, r = 0xfd, a = 0xFF};
        Olive           : static Video.Color = Video.Color() {b = 0x00, g = 0x80, r = 0x80, a = 0xFF};
        OliveDrab       : static Video.Color = Video.Color() {b = 0x23, g = 0x8e, r = 0x6b, a = 0xFF};
        Orange          : static Video.Color = Video.Color() {b = 0x00, g = 0xa5, r = 0xff, a = 0xFF};
        OrangeRed       : static Video.Color = Video.Color() {b = 0x00, g = 0x45, r = 0xff, a = 0xFF};
        Orchid          : static Video.Color = Video.Color() {b = 0xd6, g = 0x70, r = 0xda, a = 0xFF};
        PaleGoldenrod   : static Video.Color = Video.Color() {b = 0xaa, g = 0xe8, r = 0xee, a = 0xFF};
        PaleGreen       : static Video.Color = Video.Color() {b = 0x98, g = 0xfb, r = 0x98, a = 0xFF};
        PaleTurquoise   : static Video.Color = Video.Color() {b = 0xee, g = 0xee, r = 0xaf, a = 0xFF};
        PaleVioletRed   : static Video.Color = Video.Color() {b = 0x93, g = 0x70, r = 0xdb, a = 0xFF};
        PapayaWhip      : static Video.Color = Video.Color() {b = 0xd5, g = 0xef, r = 0xff, a = 0xFF};
        PeachPuff       : static Video.Color = Video.Color() {b = 0xb9, g = 0xda, r = 0xff, a = 0xFF};
        Peru            : static Video.Color = Video.Color() {b = 0x3f, g = 0x85, r = 0xcd, a = 0xFF};
        Pink            : static Video.Color = Video.Color() {b = 0xcb, g = 0xc0, r = 0xff, a = 0xFF};
        Plum            : static Video.Color = Video.Color() {b = 0xdd, g = 0xa0, r = 0xdd, a = 0xFF};
        PowderBlue      : static Video.Color = Video.Color() {b = 0xe6, g = 0xe0, r = 0xb0, a = 0xFF};
        Purple          : static Video.Color = Video.Color() {b = 0x80, g = 0x00, r = 0x80, a = 0xFF};
        Red             : static Video.Color = Video.Color() {b = 0x00, g = 0x00, r = 0xff, a = 0xFF};
        RosyBrown       : static Video.Color = Video.Color() {b = 0x8f, g = 0x8f, r = 0xbc, a = 0xFF};
        RoyalBlue       : static Video.Color = Video.Color() {b = 0xe1, g = 0x69, r = 0x41, a = 0xFF};
        SaddleBrown     : static Video.Color = Video.Color() {b = 0x13, g = 0x45, r = 0x8b, a = 0xFF};
        Salmon          : static Video.Color = Video.Color() {b = 0x72, g = 0x80, r = 0xfa, a = 0xFF};
        SandyBrown      : static Video.Color = Video.Color() {b = 0x60, g = 0xa4, r = 0xf4, a = 0xFF};
        SeaGreen        : static Video.Color = Video.Color() {b = 0x57, g = 0x8b, r = 0x2e, a = 0xFF};
        SeaShell        : static Video.Color = Video.Color() {b = 0xee, g = 0xf5, r = 0xff, a = 0xFF};
        Sienna          : static Video.Color = Video.Color() {b = 0x2d, g = 0x52, r = 0xa0, a = 0xFF};
        Silver          : static Video.Color = Video.Color() {b = 0xc0, g = 0xc0, r = 0xc0, a = 0xFF};
        SkyBlue         : static Video.Color = Video.Color() {b = 0xeb, g = 0xce, r = 0x87, a = 0xFF};
        SlateBlue       : static Video.Color = Video.Color() {b = 0xcd, g = 0x5a, r = 0x6a, a = 0xFF};
        SlateGray       : static Video.Color = Video.Color() {b = 0x90, g = 0x80, r = 0x70, a = 0xFF};
        Snow            : static Video.Color = Video.Color() {b = 0xfa, g = 0xfa, r = 0xff, a = 0xFF};
        SpringGreen     : static Video.Color = Video.Color() {b = 0x7f, g = 0xff, r = 0x00, a = 0xFF};
        SteelBlue       : static Video.Color = Video.Color() {b = 0xb4, g = 0x82, r = 0x46, a = 0xFF};
        Tan             : static Video.Color = Video.Color() {b = 0x8c, g = 0xb4, r = 0xd2, a = 0xFF};
        Teal            : static Video.Color = Video.Color() {b = 0x80, g = 0x80, r = 0x00, a = 0xFF};
        Thistle         : static Video.Color = Video.Color() {b = 0xd8, g = 0xbf, r = 0xd8, a = 0xFF};
        Tomato          : static Video.Color = Video.Color() {b = 0x47, g = 0x63, r = 0xff, a = 0xFF};
        Turquoise       : static Video.Color = Video.Color() {b = 0xd0, g = 0xe0, r = 0x40, a = 0xFF};
        Violet          : static Video.Color = Video.Color() {b = 0xee, g = 0x82, r = 0xee, a = 0xFF};
        Wheat           : static Video.Color = Video.Color() {b = 0xb3, g = 0xde, r = 0xf5, a = 0xFF};
        White           : static Video.Color = Video.Color() {b = 0xFF, g = 0xFF, r = 0xFF, a = 0xFF};
        WhiteSmoke      : static Video.Color = Video.Color() {b = 0xf5, g = 0xf5, r = 0xf5, a = 0xFF};
        Yellow          : static Video.Color = Video.Color() {b = 0x00, g = 0xff, r = 0xff, a = 0xFF};
        YellowGreen     : static Video.Color = Video.Color() {b = 0x32, g = 0xcd, r = 0x9a, a = 0xFF};

