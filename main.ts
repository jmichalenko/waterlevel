input.onButtonPressed(Button.A, function () {
    basic.showString("reset")
    basic.clearScreen()
    min_level = 0
    water_level = 0
})
let min_level = 0
let water_level = 0
basic.clearScreen()
water_level = 0
min_level = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        water_level = 1
        if (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P1)) {
            water_level = 3
        }
        if (input.pinIsPressed(TouchPin.P0) && (input.pinIsPressed(TouchPin.P1) && input.pinIsPressed(TouchPin.P2))) {
            min_level = 6
        }
        if (water_level > min_level) {
            min_level = water_level
        }
        basic.showString("" + (min_level))
        basic.showString("cm")
    }
})
