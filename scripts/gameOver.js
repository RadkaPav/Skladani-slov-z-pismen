import { data } from "./data.js"
import { index } from "./buttons.js"
import { button } from "./querySelectors.js"

//KONEC HRY
export const gameOver = () => {
 const draggedBoxes = document.querySelectorAll(".dragged")
    let results = []
    const correctAnswer = data[index].word

    draggedBoxes.forEach((box) => {     //přetažená písmena přidá do results
        results.push(box.innerText)
    })

    const result = results.join("").toLowerCase()
    
    if (result === correctAnswer) {         //při správné odpovědi se zobrazí tlačítko pro posun na další slovo
        button.classList.remove("invisible")
    }

}





