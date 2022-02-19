def on_forever():
    if PlanetX_Basic.crash(PlanetX_Basic.DigitalRJPin.J2):
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
    if True:
        pass
basic.forever(on_forever)
