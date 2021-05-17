input.onButtonPressed(Button.A, function () {
    reset()
})
function reset () {
    schritte = 0
    basic.showNumber(schritte)
}
let schritte = 0
schritte = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 100 && input.isGesture(Gesture.Shake)) {
        schritte += 1
        basic.pause(100)
    }
    basic.showNumber(schritte)
})
