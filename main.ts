basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(index)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
        index += 1
    }
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(index)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 255)
        index += 1
    }
})
