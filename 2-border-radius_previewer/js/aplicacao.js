function getInformations() {
    topLeft = document.getElementById("top-left").value;
    topRigth = document.getElementById("top-rigth").value;
    bottomLeft = document.getElementById("bottom-left").value;
    bottomRigth = document.getElementById("bottom-rigth").value;
    console.log(topLeft, topRigth, bottomLeft, bottomRigth);
}

function modifyBorderRadius(topLeft, topRigth, bottomLeft, bottomRigth) {
    if (topLeft == "" || topRigth == "" || bottomLeft == "" || bottomRigth =="") {
        alert("Preencha todos os campos!");
    } else {
        //neste trecho é feito a modificação da do modifiable box
        document.getElementById("modifiableBox").style.borderRadius = `${topLeft}% ${topRigth}% ${bottomLeft}% ${bottomRigth}%`;

        //este trecho cria os textos que vão ser inseridos no HTML
        let topLeftText =  document.createTextNode(`border-top-left-radius: ${topLeft};`);
        let topRigthText =  document.createTextNode(`border-top-rigth-radius: ${topRigth};`);
        let bottomLeftText =  document.createTextNode(`border-bottom-left-radius: ${bottomLeft};`);
        let bottomRigthText =  document.createTextNode(`border-bottom-rigth-radius: ${bottomRigth};`);
        
        //neste trecho os textos estão sendo inseridos no HTML
        let innerTopLeft = document.getElementById("topLeft")
        innerTopLeft.appendChild(topLeftText)
        let innerTopRigth = document.getElementById("topRigth")
        innerTopRigth.appendChild(topRigthText)
        let innerBottomLeft = document.getElementById("bottomLeft")
        innerBottomLeft.appendChild(bottomLeftText)
        let innerBottomRigth = document.getElementById("bottomRigth")
        innerBottomRigth.appendChild(bottomRigthText)
    }
}

function copyCSS() {
    let topLeft = document.getElementById("topLeft").innerHTML
    let topRigth = document.getElementById("topRigth").innerHTML
    let bottomLeft = document.getElementById("bottomLeft").innerHTML
    let bottomRigth = document.getElementById("bottomRigth").innerHTML
    let text = topLeft +"\n"+ topRigth +"\n"+ bottomLeft +"\n"+ bottomRigth
    
    navigator.clipboard.writeText(text)
    .then(() => {
    console.log("Text copied to clipboard...")
})
    .catch(err => {
    console.log('Something went wrong', err);
})
    console.log(topLeft)
}

function modifyBox() {
    getInformations();
    modifyBorderRadius(topLeft, topRigth, bottomLeft, bottomRigth);
}

function copyStyle(){
    copyCSS(topLeft, topRigth, bottomLeft, bottomRigth)
}

let topLeft, topRigth, bottomLeft, bottomRigth