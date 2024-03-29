import { container, goalContainer, img, button, newGameButton, modal } from "./querySelectors.js"
import { newGame } from "./newGame.js"
import { gameOver } from "./gameOver.js"
import { click } from "./click.js"
import { dragAndDrop } from "./dragAndDrop.js"
import { data } from "./data.js"

let index = 0

button.addEventListener("click", () => {
    index += 1
    container.innerHTML = ""
    goalContainer.innerHTML = ""
    button.classList.add("invisible")
    const modal = document.querySelector(".modal")
    
    if (index >= data.length) {
        img.classList.add("invisible")
        document.removeEventListener("click", gameOver)
        modal.classList.add("open-modal")
    }
    
    else {
        newGame(index)
        dragAndDrop()
        click()
    }
})

newGameButton.addEventListener("click", () => {
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
