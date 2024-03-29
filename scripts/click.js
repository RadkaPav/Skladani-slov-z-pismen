let draggedItem = null
const createDraggedItem = (whereToAdd) => {
    whereToAdd.appendChild(draggedItem)
    draggedItem.style.display = 'block'
    draggedItem = null
}

export const click = () => {
 const boxes = document.querySelectorAll(".box")
 const goals = document.querySelectorAll(".goal")
 const originalBoxes = document.querySelectorAll(".origin")
    
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            draggedItem = box
            draggedItem.style.display = 'none'
            
            if (draggedItem.classList.contains("dragged")) {
                const originalBox = Array.from(originalBoxes).find(oneBox => oneBox.id === draggedItem.id)
                if (originalBox) {
                    draggedItem.classList.remove("dragged")
                    createDraggedItem(originalBox)
                }
            }
            
            if (draggedItem) {
                draggedItem.classList.add("dragged")
                const nextEmptyGoal = Array.from(goals).find(goal => goal.children.length === 0)
                if (nextEmptyGoal) {
                    createDraggedItem(nextEmptyGoal)
                }
            }
        })
    })
}
