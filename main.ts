input.onButtonPressed(Button.A, function () {
    nave.move(-1)
})
input.onGesture(Gesture.Shake, function () {
    game.resume()
})
input.onButtonPressed(Button.AB, function () {
    vidas = game.createSprite(nave.get(LedSpriteProperty.X), nave.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        disparo.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    nave.move(1)
})
let vidas: game.LedSprite = null
let disparo: game.LedSprite = null
let nave: game.LedSprite = null
nave = game.createSprite(2, 2)
let enemigo1 = game.createSprite(2, 0)
disparo = game.createSprite(2, 0)
enemigo1.delete()
disparo.delete()
game.setScore(0)
basic.forever(function () {
    if (disparo.isTouchingEdge()) {
        disparo.delete()
    }
})
basic.forever(function () {
    if (disparo.isTouching(enemigo1)) {
        enemigo1.delete()
        disparo.delete()
        game.addScore(1)
    } else if (enemigo1.isTouching(nave)) {
        game.gameOver()
    } else if (enemigo1.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(randint(1000, 1000))
    enemigo1 = game.createSprite(randint(0, 4), 0)
})
basic.forever(function () {
    if (!(enemigo1.isDeleted())) {
        enemigo1.change(LedSpriteProperty.Y, 1)
    }
})
