import { data } from "./data.js"

export const container = document.querySelector(".letters")
export const goalContainer = document.querySelector(".goals")
export const img = document.querySelector(".img")

export const newGame = (index) => {
    img.src = data[index].image

    // Náhodné zamíchání písmen
    const letters = data[index].letters
    function shuffleLetters() {
        for (let i = 0; i < letters.length; i++) {
            let number = Math.floor(Math.random() * (letters.length - i))
            let x = letters[number]
            letters[number] = letters[letters.length - i - 1]
            letters[letters.length - i - 1] = x
        }
    }
    shuffleLetters()
    //pokud jsou písmena v původním pořadí, míchání se spustí znovu
    const oldOrderLetters = data[index].word
    const newOrderLetters = letters.join("").toLowerCase()
    if (newOrderLetters === oldOrderLetters) {
        shuffleLetters()
    }
    //vytvoření políček s písmeny
    for (let j = 0; j < data[index].letters.length; j++) {
        const div = document.createElement("div")
        div.classList.add(`origin`)
        div.setAttribute("id", `${j}`)
        div.innerHTML = `<div class="box" draggable="true">${data[index].letters[j]}</div>`
        container.appendChild(div)
        const boxes = document.querySelectorAll(".box")
        for (let k = 0; k < boxes.length; k++) {
            boxes[k].setAttribute("id", `${k}`)
        }
        //vytvoření cílových políček
        const goalDiv = document.createElement("div")
        goalDiv.classList.add("goal")
        goalContainer.appendChild(goalDiv)
    }

}
