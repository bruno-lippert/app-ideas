function getInformations() {
    topLeft = document.getElementById("top-left").value;
    topRight = document.getElementById("top-right").value;
    bottomLeft = document.getElementById("bottom-left").value;
    bottomRight = document.getElementById("bottom-right").value;
}

function modifyBorderRadius(topLeft, topRight, bottomLeft, bottomRight) {
    if (topLeft == "" || topRight == "" || bottomLeft == "" || bottomRight =="") {
        alert("Preencha todos os campos!");
    } else {
        //neste trecho é feito a modificação da do modifiable box
        document.getElementById("modifiableBox").style.borderRadius = `${topLeft}% ${topRight}% ${bottomLeft}% ${bottomRight}%`;

        //este trecho cria os textos que vão ser inseridos no HTML
        let topLeftText =  document.createTextNode(`border-top-left-radius: ${topLeft}px;`);
        let topRightText =  document.createTextNode(`border-top-right-radius: ${topRight}px;`);
        let bottomLeftText =  document.createTextNode(`border-bottom-left-radius: ${bottomLeft}px;`);
        let bottomRightText =  document.createTextNode(`border-bottom-right-radius: ${bottomRight}px;`);
        
        //neste trecho os textos estão sendo inseridos no HTML
        let innerTopLeft = document.getElementById("topLeft")
        innerTopLeft.appendChild(topLeftText)
        let innerTopRight = document.getElementById("topRight")
        innerTopRight.appendChild(topRightText)
        let innerBottomLeft = document.getElementById("bottomLeft")
        innerBottomLeft.appendChild(bottomLeftText)
        let innerBottomRigth = document.getElementById("bottomRight")
        innerBottomRigth.appendChild(bottomRightText)
    }
}

function copyCSS() {
    let topLeft = document.getElementById("topLeft").innerHTML
    let topRight = document.getElementById("topRigth").innerHTML
    let bottomLeft = document.getElementById("bottomLeft").innerHTML
    let bottomRight = document.getElementById("bottomRigth").innerHTML
    let text = topLeft +"\n"+ topRight +"\n"+ bottomLeft +"\n"+ bottomRight
    
    navigator.clipboard.writeText(text)
    .then(() => {
    console.log("Text copied to clipboard...")
})
    .catch(err => {
    console.log('Something went wrong', err);
})
}

function modifyBox() {
    getInformations();
    modifyBorderRadius(topLeft, topRight, bottomLeft, bottomRight);
}

function copyStyle(){
    copyCSS(topLeft, topRight, bottomLeft, bottomRight)
}

let topLeft, topRight, bottomLeft, bottomRight