import { newGame, container, goalContainer, img } from "./newGame.js"
import { gameOver, button } from "./gameOver.js"
import { click } from "./click.js"
import { dragAndDrop } from "./dragAndDrop.js"
import { data } from "./data.js"

const main = document.querySelector("main")
let index = 0

newGame(index)
click()
dragAndDrop()
gameOver()

document.addEventListener("click", gameOver)
document.addEventListener("drop", gameOver)

//DALŠÍ SLOVO
button.addEventListener("click", function () {
    index += 1
    container.innerHTML = ""
    goalContainer.innerHTML = ""
    button.classList.add("invisible")
    const modal = document.querySelector(".modal")
    //poslední slovo - hra se ukončí
    if (index >= data.length) {
        img.classList.add("invisible")
        document.removeEventListener("click", gameOver)
        modal.classList.add("open-modal")
    }
    //pokud slovo není poslední, spustí se další v řadě
    else {
        newGame(index)
        click()
        dragAndDrop()
    }
})

//NOVÁ HRA
const newGameButton = document.querySelector(".new-game")
newGameButton.addEventListener("click", function () {
    const modal = document.querySelector(".modal")
    modal.classList.remove("open-modal")
    img.classList.remove("invisible")
    document.addEventListener("click", gameOver)
    index = 0
    newGame(index)
    click()
    dragAndDrop()
    gameOver()
})

export { index }