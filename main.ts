basic.showIcon(IconNames.Heart)
music.playMelody("C5 B A - - C5 F - ", 120)
basic.forever(function () {
    if (14 <= PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    if (PlanetX_Basic.Crash(PlanetX_Basic.DigitalRJPin.J2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
