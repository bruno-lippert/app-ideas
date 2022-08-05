class BorderRadius {
    constructor(topLeft, topRigth, bottomLeft, bottomRigth) {
        this.topLeft = topLeft;
        this.topRigth = topRigth;
        this.bottomLeft = bottomLeft;
        this.bottomRigth = bottomRigth;
    }
}

function getInformations() {
    let topLeft = document.getElementById("top-left").value;
    let topRigth = document.getElementById("top-rigth").value;
    let bottomLeft = document.getElementById("bottom-left").value;
    let bottomRigth = document.getElementById("bottom-rigth").value;
    let application = new BorderRadius(topLeft, topRigth, bottomLeft, bottomRigth);
    // this.modifyBorderRadius(application)
    console.log(application)
    return application

}

function modifyBorderRadius() {
    if (
        application.topLeft == "" ||
        application.topRigth == "" ||
        application.bottomLeft == "" ||
        application.bottomRigth == ""
    ) {
        alert("Preencha todos os campos!");
    }

    document.getElementById("modifiableBox").style.borderRadius = `${application.topLeft}% ${application.topRigth}% ${application.bottomLeft}% ${application.bottomRigth}%`;

    console.log(application.topLeft);
    console.log(application.topRigth);
    console.log(application.bottomLeft);
    console.log(application.bottomRigth);
}

// copyCSS(){
//     this.addPropertiesBorderRadiusHTML(application)
// }

function copyCSS() {
    let text = `border-top-left-radius:${this.topLeft};
                border-top-right-radius:${this.topRigth};
                border-bottom-left-radius:${this.bottomLeft};
                border-bottom-right-radius:${this.bottomRigth};`;
    console.log(text);
    return text

    // let element = document.getElementById("styleBorderRadius")
    // element.innerText(text)
}

let application = new BorderRadius()

function x() {
    getInformations()
    modifyBorderRadius()
}