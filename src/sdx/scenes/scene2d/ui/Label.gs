[indent=4]
/**
 * Label.gs
 *
 * 
 *
 */
uses sdx.graphics

namespace sdx.scenes.scene2d.ui

    class Label : Image

        text: string
        _style: LabelStyle
        labelAlign: int = Align.left
        lineAlign: int = Align.left

        construct(text: string, font: string, color: Color, size: int)
            this.text = text
            setStyle(new LabelStyle(sdx.Font.fromFile(font, size), color))
            if text != null && text.length > 0 do setSize(getPrefWidth(), getPrefHeight())

        construct style(text: string, style: LabelStyle)
            this.text = text
            setStyle(style)
            if text != null && text.length > 0 do setSize(getPrefWidth(), getPrefHeight())
            

        class static LabelStyle : Object
            font: sdx.Font
            fontColor: Color
            construct(font: sdx.Font, color: Color)
                this.font = font
                this.fontColor = color


             
            // TODO: 
            // create drawable for surfaceFromRenderedText        
            // super(drawable) 

        def setStyle(style: LabelStyle)
            if _style == null
                raise new Exception.IllegalArgumentException("style cannot be null.")
            if _style.font == null
                raise new Exception.IllegalArgumentException("Missing LabelStyle font.")
            _style = style
            invalidateHierarchy()

        def getStyle(): LabelStyle
            return _style

        def setText(newText: string)
            if text == newText do return
            this.text = newText
            invalidateHierarchy()
            
        def textEquals(other: string): bool
            return text == other
        
        def getText(): string
            return text

        def setAlignment(labelAlign: int, lineAlign: int=-1)
            if lineAlign==-1 do lineAlign = labelAlign
            this.labelAlign = labelAlign

            if (lineAlign & Align.left) != 0
                this.lineAlign = Align.left
            else if (lineAlign & Align.right) != 0
                this.lineAlign = Align.right
            else
                this.lineAlign = Align.center

            invalidate()
            


        

        