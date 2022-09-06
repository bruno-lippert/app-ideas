function addItem() {
    const item = document.getElementById("item").value

    if (item == "") {
        alert("Digite um item para adiciona-lo na lista!")
    } else {
        //cira um paragrafo e adiciona o texto dentro dele
        const newItemElement = document.createElement("p")
        const newItem = document.createTextNode(item)
        newItemElement.setAttribute("class", "items")
        newItemElement.appendChild(newItem)

        //cria um checkbox
        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkbox")

        //coloca o checkbox e o item dentro da class container
        const container = document.getElementById("listOfItems")
        newItemElement.appendChild(checkBox)
        const newDiv = document.createElement("div")
        newDiv.setAttribute("class", "newDiv")
        container.appendChild(newDiv)
        newDiv.appendChild(newItemElement)

        
        //adiciona o botão de remover
        const btnRemove = document.createElement("input")
        btnRemove.setAttribute("type", "button")
        btnRemove.setAttribute("value", "Remover")
        btnRemove.setAttribute("onclick", "removeItem(this)")
        newDiv.appendChild(btnRemove)
    }
}

function removeItem(button) {
    const removableElement = button.parentNode
    document.getElementById("listOfItems").removeChild(removableElement)
}