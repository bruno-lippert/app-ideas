function modifyBorderRadius() {
    let topLeft = document.getElementById("top-left").value
    let topRigth = document.getElementById("top-rigth").value
    let bottomLeft = document.getElementById("bottom-left").value
    let bottomRigth = document.getElementById("bottom-rigth").value

    if(topLeft == "" || topRigth == "" || bottomLeft == "" || bottomRigth == "") {
        alert("Preencha todos os campos!") 
    }

    let modifiableBox = document.getElementById("modifiableBox").style.borderRadius = `${topLeft}% ${topRigth}% ${bottomLeft}% ${bottomRigth}%`

    console.log(topLeft)
    console.log(topRigth)
    console.log(bottomLeft)
    console.log(bottomRigth)
}

function copyText() {
    let copytext = document.getElementById("modifiableBox").style.select()
    console.log(copytext)
}