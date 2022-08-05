class BorderRadius {
    constructor(topLeft, topRigth, bottomLeft, bottomRigth) {
        this.topLeft = topLeft;
        this.topRigth = topRigth;
        this.bottomLeft = bottomLeft;
        this.bottomRigth = bottomRigth;
    }

    getInformations() {
        let topLeft = document.getElementById("top-left").value;
        let topRigth = document.getElementById("top-rigth").value;
        let bottomLeft = document.getElementById("bottom-left").value;
        let bottomRigth = document.getElementById("bottom-rigth").value;
        let application = new BorderRadius(topLeft, topRigth, bottomLeft, bottomRigth);
        // this.modifyBorderRadius(application)
        console.log(application)
        return application
        
    }

    modifyBorderRadius() {
        if (
            this.topLeft == "" ||
            this.topRigth == "" ||
            this.bottomLeft == "" ||
            this.bottomRigth == ""
        ) {
            alert("Preencha todos os campos!");
        }

        document.getElementById("modifiableBox").style.borderRadius = `${this.topLeft}% ${this.topRigth}% ${this.bottomLeft}% ${this.bottomRigth}%`;

        console.log(this.topLeft);
        console.log(this.topRigth);
        console.log(this.bottomLeft);
        console.log(this.bottomRigth);
    }

    // copyCSS(){
    //     this.addPropertiesBorderRadiusHTML(application)
    // }

    copyCSS() {
        let text = `border-top-left-radius:${this.topLeft};
                border-top-right-radius:${this.topRigth};
                border-bottom-left-radius:${this.bottomLeft};
                border-bottom-right-radius:${this.bottomRigth};`;
        console.log(text);
        return text

        // let element = document.getElementById("styleBorderRadius")
        // element.innerText(text)
    }

    copyText() {
        
    }

}    

let application = new BorderRadius()

function x() {
    application.getInformations()
    application.modifyBorderRadius()
}