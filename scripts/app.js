import { newGame } from "./newGame.js"
import { gameOver } from "./gameOver.js"
import { click } from "./click.js"
import { dragAndDrop } from "./dragAndDrop.js"

newGame(0)
dragAndDrop()
click()
gameOver()

document.addEventListener("click", gameOver)
document.addEventListener("drop", gameOver)
