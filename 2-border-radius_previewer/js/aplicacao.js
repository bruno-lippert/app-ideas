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
        this.modifyBorderRadius(application)
        console.log(application)
        return application
        
    }

    modifyBorderRadius(application) {
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

    addPropertiesBorderRadiusHTML(application) {
        let text = `border-top-left-radius:${application.topLeft};
                border-top-right-radius:${application.topRigth};
                border-bottom-left-radius:${application.bottomLeft};
                border-bottom-right-radius:${application.bottomRigth};`;
        console.log(text);

        // let element = document.getElementById("styleBorderRadius")
        // element.innerText(text)
    }

    copyText() {
        
    }
}    

    let application = new BorderRadius()