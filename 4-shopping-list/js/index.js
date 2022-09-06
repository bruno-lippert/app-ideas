function addItem() {
    const item = document.getElementById("item").value

    if (item == "") {
        alert("Digite um item para adiciona-lo na lista!")
     } 
    //else if(item.length > 12){
    // } 
    else {
        //cira um paragrafo
        const newItemElement = document.createElement("p")
        const newItem = document.createTextNode(item)
        newItemElement.setAttribute("class", "items")
        

        //cria um checkbox
        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkbox")
        checkBox.setAttribute("class", "checkBoxes")

        const span = document.createElement("span")
        span.setAttribute("class", "checkmark")
        
        newItemElement.appendChild(checkBox)
        newItemElement.appendChild(newItem)

        //coloca o checkbox e o item dentro da class container
        const container = document.getElementById("listOfItems")
        
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