function getInformations() {
    topLeft = document.getElementById("top-left").value;
    topRigth = document.getElementById("top-rigth").value;
    bottomLeft = document.getElementById("bottom-left").value;
    bottomRigth = document.getElementById("bottom-rigth").value;
    console.log(topLeft, topRigth, bottomLeft, bottomRigth);
}

function modifyBorderRadius(topLeft, topRigth, bottomLeft, bottomRigth) {
    if (
        topLeft == "" ||
        topRigth == "" ||
        bottomLeft == "" ||
        bottomRigth == ""
    ) {
        alert("Preencha todos os campos!");
    }

    document.getElementById("modifiableBox").style.borderRadius = `${topLeft}% ${topRigth}% ${bottomLeft}% ${bottomRigth}%`;

    let borderTopLeft = document.createTextNode(`border-top-left-radius:${topLeft};`);
    let borderTopRigth = document.createTextNode(`border-top-right-radius:${topRigth};`)
    let borderBottomLeft = document.createTextNode(`border-bottom-left-radius:${bottomLeft};`)
    let borderBottomRigth = document.createTextNode(`border-bottom-right-radius:${bottomRigth};`)
    let copiedText = document.getElementById("border-radius-properties")
}

function copyCSS() {
    
    console.log(copiedText);
    // copiedText.select();
    // document.execCommand("copy")
    return copiedText
}

function modifyBox() {
    getInformations();
    modifyBorderRadius(topLeft, topRigth, bottomLeft, bottomRigth);
}

function copyStyle(){
    copyCSS(topLeft, topRigth, bottomLeft, bottomRigth)
}

let topLeft, topRigth, bottomLeft, bottomRigth