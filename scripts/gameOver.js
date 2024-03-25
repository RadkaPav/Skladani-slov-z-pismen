import { data } from "./data.js"
import { index } from "./buttons.js"
import { button } from "./querySelectors.js"

export const gameOver = () => {
 const draggedBoxes = document.querySelectorAll(".dragged")
    let results = []
    const correctAnswer = data[index].word

    draggedBoxes.forEach((box) => {    
        results.push(box.innerText)
    })

    const result = results.join("").toLowerCase()
    
    if (result === correctAnswer) {        
        button.classList.remove("invisible")
    }

}





