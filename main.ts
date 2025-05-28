let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
let nummer = 0
basic.forever(function () {
    for (let index = 0; index < 60; index++) {
        basic.pause(50)
        strip.clear()
        nummer += 1
        strip.setPixelColor(nummer, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    for (let index = 0; index < 60; index++) {
        basic.pause(50)
        strip.clear()
        nummer += -1
        strip.setPixelColor(nummer, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    }
})
