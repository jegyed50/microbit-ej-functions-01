function pause_hours (hours_value: number) {
    basic.pause(1000 * (602 * 60 * hours_value))
}
function ShowText (text: string, ShowTimeOneLetter: number, PauseBetweenLetters: number) {
    CurrentLetterIndex = 0
    while (CurrentLetterIndex2 <= text.length) {
        CurrentLetter = text.substr(CurrentLetterIndex2, 1)
        basic.showString(CurrentLetter)
        basic.pause(ShowTimeOneLetter)
        basic.clearScreen()
        basic.pause(PauseBetweenLetters)
        CurrentLetterIndex2 += 1
    }
}
input.onButtonPressed(Button.A, function () {
    ShowText("abc", 200, 150)
})
input.onButtonPressed(Button.AB, function () {
    ShowNumber(123, 200, 150)
})
input.onButtonPressed(Button.B, function () {
    ShowText(convertToText(123), 200, 150)
})
function ej_screensaver (switch_off_LED_max_brightness: number, fade_delay: number) {
    while (true) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                currentledbrightness = led.pointBrightness(x, y)
                if (currentledbrightness > 0) {
                    for (let valtozofenyesseg = 0; valtozofenyesseg <= 25; valtozofenyesseg++) {
                        led.plotBrightness(x, y, currentledbrightness - valtozofenyesseg * 10)
                        basic.pause(valtozofenyesseg * fade_delay)
                    }
                    led.plotBrightness(x, y, 255)
                    for (let valtozofenyesseg2 = 0; valtozofenyesseg2 <= 25; valtozofenyesseg2++) {
                        led.plotBrightness(x, y, currentledbrightness - 0 * 10)
                        basic.pause(valtozofenyesseg2 * fade_delay)
                    }
                    led.plotBrightness(x, y, currentledbrightness)
                } else {
                    valtozofenyesseg3 = 0
                    while (valtozofenyesseg3 <= switch_off_LED_max_brightness / 25) {
                        led.plotBrightness(x, y, valtozofenyesseg3 * 25)
                        basic.pause(valtozofenyesseg3 * fade_delay * 10)
                        valtozofenyesseg3 += 1
                    }
                    led.plotBrightness(x, y, 0)
                    basic.pause(fade_delay * 100)
                }
            }
        }
    }
}
function ShowNumber (Number2: number, ShowTimeOneDigit: number, PauseBetweenDigits: number) {
    NumberToText = convertToText(Number2)
    ShowText(NumberToText, 200, 150)
}
function pause_mins (mins_value: number) {
    basic.pause(1000 * 60 * mins_value)
}
function pause_secs (secs_value: number) {
    basic.pause(1000 * secs_value)
}
let NumberToText = ""
let valtozofenyesseg3 = 0
let currentledbrightness = 0
let CurrentLetter = ""
let CurrentLetterIndex2 = 0
let CurrentLetterIndex = 0
let currentledbrightness2 = 0
basic.showIcon(IconNames.Heart)
pause_secs(5)
basic.clearScreen()
pause_secs(1)
basic.showIcon(IconNames.Heart)
pause_mins(1)
basic.clearScreen()
pause_secs(1)
basic.showIcon(IconNames.Heart)
pause_hours(1)
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})
control.inBackground(function () {
    ej_screensaver(124, 2)
})
