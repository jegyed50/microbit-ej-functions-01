let CurrentLetterIndex = 0
let CurrentLetter = ""
let NumberToText = ""
function ShowText (text: string, ShowTimeOneChar: number, PauseBetweenLetters: number) {
    CurrentLetterIndex = 0
    for (let CurrentLetterIndex2 = 0; CurrentLetterIndex2 <= text.length; CurrentLetterIndex2++) {
        CurrentLetter = text.substr(CurrentLetterIndex2, 1)
        basic.showString(CurrentLetter)
        basic.pause(ShowTimeOneChar)
        basic.clearScreen()
        basic.pause(PauseBetweenLetters)
    }
}
input.onButtonPressed(Button.A, function () {
    ShowText("abc", 200, 150)
})
input.onButtonPressed(Button.B, function () {
    ShowNumber(123, 200, 150)
})
function ShowNumber (Number2: number, ShowTimeOneDigit: number, PauseBetweenDigits: number) {
    NumberToText = convertToText(Number2)
    CurrentLetterIndex = 0
    for (let CurrentLetterIndex3 = 0; CurrentLetterIndex3 <= NumberToText.length; CurrentLetterIndex3++) {
        CurrentLetter = NumberToText.substr(CurrentLetterIndex3, 1)
        basic.showString(CurrentLetter)
        basic.pause(ShowTimeOneDigit)
        basic.clearScreen()
        basic.pause(PauseBetweenDigits)
    }
}
basic.forever(function () {
	
})
