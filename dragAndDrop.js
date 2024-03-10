//PŘETAHOVÁNÍ PRVKŮ
// Přidání posluchačů událostí pro všechny boxy s písmeny
export const dragAndDrop = () => {
    let draggedItem = null
    const boxes = document.querySelectorAll('.box')
    const goals = document.querySelectorAll('.goal')
    const originalBoxes = document.querySelectorAll(".origin")

    boxes.forEach(box => {
        box.addEventListener('dragstart', () => {
            draggedItem = box
            setTimeout(() => {
                box.style.display = 'none'
            }, 0)
        })

        box.addEventListener('dragend', () => {
            setTimeout(() => {
                draggedItem.style.display = 'block'
                draggedItem = null
            }, 0)
        })
    })

    // Přidání posluchačů událostí pro všechny cílové boxy
    goals.forEach(goal => {
        goal.addEventListener('dragover', e => {
            e.preventDefault()
        })

        goal.addEventListener('dragleave', e => {
            e.preventDefault()
        })
        goal.addEventListener('drop', () => {
            if (draggedItem.classList.contains('goal')) {   //pokud přetahovaný prvek obsahuje třídu "goal", nepřetáhne se
                return
            }
            if (goal.children.length > 0) {     //pokud políčko již obsahuje písmeno, nepřetáhne se
                return
            }
            goal.appendChild(draggedItem)
            draggedItem.classList.add("dragged")
        })
    })
    // Přidání posluchačů událostí pro všechny původní boxy
    originalBoxes.forEach(goal => {
        goal.addEventListener('dragover', e => {
            e.preventDefault()
        })

        goal.addEventListener('dragleave', e => {
            e.preventDefault()
        })
        goal.addEventListener('drop', () => {
            if (draggedItem.classList.contains('goal')) {   //pokud přetahovaný prvek obsahuje třídu "goal", nepřetáhne se
                return
            }
            if (goal.children.length > 0) {     //pokud políčko již obsahuje písmeno, nepřetáhne se
                return
            }
            goal.appendChild(draggedItem)
            draggedItem.classList.remove("dragged")
        })
    })
}