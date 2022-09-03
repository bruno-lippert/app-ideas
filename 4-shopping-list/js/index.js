function addItem() {
    const item = document.getElementById("item").value
    
    const newItemElement = document.createElement("p")
    const newItem = document.createTextNode(item)
    newItemElement.setAttribute("class", "items")
    newItemElement.appendChild(newItem)

    const container = document.getElementById("listOfItems")
    container.appendChild(newItemElement)
    const btnRemove = document.createElement("input")
    btnRemove.setAttribute("type", "button")
    btnRemove.setAttribute("value", "Remover")
    btnRemove.setAttribute("onclick", "removeItem(this)")
    newItemElement.appendChild(btnRemove)
}

function removeItem(button) {
    const removableElement = button.parentNode
    document.getElementById("listOfItems").removeChild(removableElement)
}