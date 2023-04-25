function tilt_face () {
    position = Math.round(Math.map(input.rotation(Rotation.Roll), -45, 45, 1, 9))
    if (position == 1) {
        Emote.show_mouth(MOUTHS.FLAT)
    } else if (position == 2) {
        Emote.show_eyes(EYES.SAD)
    } else if (position == 3) {
        Emote.show_eyes(EYES.SHUT)
    } else if (position == 4) {
        Emote.show_eyes(EYES.MAD)
    } else if (position == 5) {
        Emote.show_eyes(EYES.UP)
    } else if (position == 6) {
        Emote.show_eyes(EYES.POP)
    } else if (position == 7) {
        Emote.show_eyes(EYES.LEFT)
    } else if (position == 8) {
        Emote.show_eyes(EYES.RIGHT)
    } else if (position == 9) {
        Emote.show_eyes(EYES.FLIP)
        Emote.show_mouth(MOUTHS.FLIP)
    } else {
        basic.showIcon(IconNames.No)
    }
    position = Math.round(Math.map(input.rotation(Rotation.Pitch), -30, 90, 1, 12))
    if (position == 1) {
        Emote.show_mouth(MOUTHS.FLAT)
    } else if (position == 2) {
        Emote.show_mouth(MOUTHS.OK)
    } else if (position == 3) {
        Emote.show_mouth(MOUTHS.GRIN)
    } else if (position == 4) {
        Emote.show_mouth(MOUTHS.SULK)
    } else if (position == 5) {
        Emote.show_mouth(MOUTHS.HMMM)
    } else if (position == 6) {
        Emote.show_mouth(MOUTHS.OPEN)
    } else if (position == 7) {
        Emote.show_mouth(MOUTHS.LEFT)
    } else if (position == 8) {
        Emote.show_mouth(MOUTHS.RIGHT)
    } else if (position == 9) {
        Emote.show_mouth(MOUTHS.SHOUT)
    } else if (position == 10) {
        Emote.show_mouth(MOUTHS.LAUGH)
    } else if (position == 11) {
        Emote.show_mouth(MOUTHS.KISS)
    } else if (position == 12) {
        Emote.show_eyes(EYES.FLIP)
        Emote.show_mouth(MOUTHS.FLIP)
    } else {
        basic.showIcon(IconNames.No)
    }
}
function next_mood () {
    mood = (mood + 1) % 10
    if (mood == 0) {
        Emote.new_mood(MOODS.NONE)
    } else if (mood == 1) {
        Emote.new_mood(MOODS.HAPPY)
    } else if (mood == 2) {
        Emote.new_mood(MOODS.SAD)
    } else if (mood == 3) {
        Emote.new_mood(MOODS.ANGRY)
    } else if (mood == 4) {
        Emote.new_mood(MOODS.SURPRISED)
    } else if (mood == 5) {
        Emote.new_mood(MOODS.ASLEEP)
    } else if (mood == 6) {
        Emote.new_mood(MOODS.SNORING)
    } else if (mood == 7) {
        Emote.new_mood(MOODS.SHIVER)
    } else if (mood == 8) {
        Emote.new_mood(MOODS.TICKLE)
    } else if (mood == 9) {
        Emote.new_mood(MOODS.DEAD)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(12000)
    Emote.cease()
}
let position = 0
let mood = 0
mood = -1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        next_mood()
    } else if (input.buttonIsPressed(Button.B)) {
        tilt_face()
    } else {
        basic.showIcon(IconNames.Square)
    }
})
