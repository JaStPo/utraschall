let Abstand = 0
basic.forever(function () {
    Abstand = grove.measureInCentimeters(DigitalPin.C16)
    if (Abstand > 80 && Abstand < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.setLedColor(0xff0000)
    } else if (Abstand > 60 && Abstand < 80) {
        basic.showLeds(`
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            `)
        basic.setLedColor(0xff0000)
    } else if (Abstand > 40 && Abstand < 60) {
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . . # # #
            . . # # #
            `)
        basic.setLedColor(0xff0000)
    } else if (Abstand > 20 && Abstand < 40) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.setLedColor(0xff0000)
    } else if (Abstand < 20) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.setLedColor(0xff0000)
    } else {
        basic.showNumber(Abstand)
        basic.showString("cm")
        basic.setLedColor(0x00ff00)
    }
})
