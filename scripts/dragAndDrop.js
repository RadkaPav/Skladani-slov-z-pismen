//PŘETAHOVÁNÍ PRVKŮ

// Přidání posluchačů událostí pro všechny boxy s písmeny
export const dragAndDrop = () => {
    let draggedItem = null
    const boxes = document.querySelectorAll(".box")
    const items = document.querySelectorAll(".div")

    boxes.forEach(box => {
        box.addEventListener('dragstart', function () {
            draggedItem = box
        })
    })

    //Přidání posluchačů událostí pro všechny cílové i startovní boxy
    items.forEach(goal => {
        goal.addEventListener('dragover', e => e.preventDefault())
        goal.addEventListener('dragleave', e => e.preventDefault())
        goal.addEventListener('drop', () => {

            if (draggedItem.classList.contains('goal')) return
            if (goal.children.length > 0) return

            goal.appendChild(draggedItem)
            draggedItem.classList.add("dragged")
        })
    })
}



