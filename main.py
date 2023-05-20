def ShowText(text: str, ShowTimeOneLetter: number, PauseBetweenLetters: number):
    global CurrentLetterIndex, CurrentLetter, CurrentLetterIndex2
    CurrentLetterIndex = 0
    while CurrentLetterIndex2 <= len(text):
        CurrentLetter = text.substr(CurrentLetterIndex2, 1)
        basic.show_string(CurrentLetter)
        basic.pause(ShowTimeOneLetter)
        basic.clear_screen()
        basic.pause(PauseBetweenLetters)
        CurrentLetterIndex2 += 1

def on_button_pressed_a():
    ShowText("abc", 200, 150)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    ShowNumber(123, 200, 150)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    ShowText(convert_to_text(123), 200, 150)
input.on_button_pressed(Button.B, on_button_pressed_b)

def ej_screensaver(switch_off_LED_max_brightness: number, fade_delay: number):
    global currentledbrightness, valtozofenyesseg3
    while True:
        for x in range(5):
            for y in range(5):
                currentledbrightness = led.point_brightness(x, y)
                if currentledbrightness > 0:
                    for valtozofenyesseg in range(26):
                        led.plot_brightness(x, y, currentledbrightness - valtozofenyesseg * 10)
                        basic.pause(valtozofenyesseg * fade_delay)
                    led.plot_brightness(x, y, 255)
                    for valtozofenyesseg2 in range(26):
                        led.plot_brightness(x, y, currentledbrightness - 0 * 10)
                        basic.pause(valtozofenyesseg2 * fade_delay)
                    led.plot_brightness(x, y, currentledbrightness)
                else:
                    valtozofenyesseg3 = 0
                    while valtozofenyesseg3 <= switch_off_LED_max_brightness / 25:
                        led.plot_brightness(x, y, valtozofenyesseg3 * 25)
                        basic.pause(valtozofenyesseg3 * fade_delay * 10)
                        valtozofenyesseg3 += 1
                    led.plot_brightness(x, y, 0)
                    basic.pause(fade_delay * 100)
def ShowNumber(Number2: number, ShowTimeOneDigit: number, PauseBetweenDigits: number):
    global NumberToText
    NumberToText = convert_to_text(Number2)
    ShowText(NumberToText, 200, 150)
NumberToText = ""
valtozofenyesseg3 = 0
currentledbrightness = 0
CurrentLetter = ""
CurrentLetterIndex2 = 0
CurrentLetterIndex = 0
currentledbrightness2 = 0
basic.show_icon(IconNames.HEART)

def on_forever():
    pass
basic.forever(on_forever)

def on_in_background():
    ej_screensaver(124, 2)
control.in_background(on_in_background)
