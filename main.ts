radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("HI THERE!")
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendString("B")
})
basic.showLeds(`
    # . # . #
    . # . # .
    . . # . .
    # . . . #
    . # . # .
    `)
basic.forever(function () {
	
})
