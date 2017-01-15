[indent=4]
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
uses Gee
uses SDL
uses GLib

namespace sdx.graphics

    class Color:  Object

        r: double
        g: double
        b: double
        a: double

        prop static readonly CLEAR: Color = new Color.rgba(0, 0, 0, 0) 
        prop static readonly BLACK: Color = new Color.rgba(0, 0, 0, 1)

        prop static readonly WHITE: Color = new Color(0xffffffff)
        prop static readonly LIGHT_GRAY: Color = new Color(0xbfbfbfff)
        prop static readonly GRAY: Color = new Color(0x7f7f7fff)
        prop static readonly DARK_GRAY: Color = new Color(0x3f3f3fff)

        prop static readonly BLUE: Color = new Color.rgba(0, 0, 1, 1)
        prop static readonly NAVY: Color = new Color.rgba(0, 0, 0.5f, 1)
        prop static readonly ROYAL: Color = new Color(0x4169e1ff)
        prop static readonly SLATE: Color = new Color(0x708090ff)
        prop static readonly SKY: Color = new Color(0x87ceebff)
        prop static readonly CYAN: Color = new Color.rgba(0, 1, 1, 1)
        prop static readonly TEAL: Color = new Color.rgba(0, 0.5f, 0.5f, 1)

        prop static readonly GREEN: Color = new Color(0x00ff00ff)
        prop static readonly CHARTREUSE: Color = new Color(0x7fff00ff)
        prop static readonly LIME: Color = new Color(0x32cd32ff)
        prop static readonly FOREST: Color = new Color(0x228b22ff)
        prop static readonly OLIVE: Color = new Color(0x6b8e23ff)

        prop static readonly YELLOW: Color = new Color(0xffff00ff)
        prop static readonly GOLD: Color = new Color(0xffd700ff)
        prop static readonly GOLDENROD: Color = new Color(0xdaa520ff)
        prop static readonly ORANGE: Color = new Color(0xffa500ff)

        prop static readonly BROWN: Color = new Color(0x8b4513ff)
        prop static readonly TAN: Color = new Color(0xd2b48cff)
        prop static readonly FIREBRICK: Color = new Color(0xb22222ff)

        prop static readonly RED: Color = new Color(0xff0000ff)
        prop static readonly SCARLET: Color = new Color(0xff341cff)
        prop static readonly CORAL: Color = new Color(0xff7f50ff)
        prop static readonly SALMON: Color = new Color(0xfa8072ff)
        prop static readonly PINK: Color = new Color(0xff69b4ff)
        prop static readonly MAGENTA: Color = new Color.rgba(1, 0, 1, 1)

        prop static readonly PURPLE: Color = new Color(0xa020f0ff)
        prop static readonly VIOLET: Color = new Color(0xee82eeff)
        prop static readonly MAROON: Color = new Color(0xb03060ff)

        construct(rgba8888: int64)
            rgba8888ToColor(this, rgba8888)

        construct rgba(r: double, g: double, b: double, a:double)
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
        //     int color = ((int)(255 * a) << 24) | ((int)(255 * b) << 16) | ((int)(255 * g) << 8) | ((int)(255 * r));
        //     return NumberUtils.intToFloatColor(color);
        // }
        def toIntBits(): int
            bits:int = ((int)(255 * a) << 24) | ((int)(255 * b) << 16) | ((int)(255 * g) << 8) | ((int)(255 * r))
            return bits
        
        def static rgba8888ToColor(color: Color, value: int64)
            color.r = ((value & 0xff000000) >> 24) / 255
            color.g = ((value & 0x00ff0000) >> 16) / 255
            color.b = ((value & 0x0000ff00) >> 8) / 255
            color.a = ((value & 0x000000ff)) / 255



        

