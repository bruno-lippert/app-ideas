function calculator(x) {
    addElementsHTML(x)

    let calculationString = document.querySelector("p[id='calculation']").innerHTML;
    let calculationArray = calculationString.split(" ");

    
    if (calculationArray[1] == "-" && calculationArray.length == 7) {
        result()

        addElementsHTML(x)
    }
   
    showResult(x)
    return x;
}

 //faz com que traga o resultado a partir de dois números inseridos mais o operador caso mais um operador seja inserido na conta
function showResult(x) {
    let calculationString = document.querySelector("p[id='calculation']").innerHTML;
    let calculationArray = calculationString.split(" ");

    if (x == " + " && calculationArray.length >= 5 && calculationArray[1] != "-" ||
        x == " - " && calculationArray.length >= 5 && calculationArray[1] != "-" ||
        x == " * " && calculationArray.length >= 5 && calculationArray[1] != "-" ||
        x == " / " && calculationArray.length >= 5 && calculationArray[1] != "-") {
        result()
        addElementsHTML(x)
    }
}

//adiciona o conteúdo no HTML
function addElementsHTML(x){
    let calculation = document.getElementById("calculation");
    let contentCalculation = document.createTextNode(x);
    calculation.appendChild(contentCalculation);
}

function createElementP(calculation) {
    //adiciona o elemento com o valor calculado na class calculation
    if (calculation == undefined) {
        let newElementP = document.createElement("p");
        newElementP.setAttribute("id", "calculation");
        let resultContent = document.createTextNode("");
        newElementP.appendChild(resultContent);
        document.querySelector("div[class='calculation'").appendChild(newElementP);
    } else {
        let newElementP = document.createElement("p");
        newElementP.setAttribute("id", "calculation");
        let resultContent = document.createTextNode(calculation);
        newElementP.appendChild(resultContent);
        document.querySelector("div[class='calculation'").appendChild(newElementP);
    }
}

function result() {
    let calculationString = document.querySelector("p[id='calculation']").innerHTML;
    let calculationArray = calculationString.split(" ");
    console.log(calculationArray)
    
    if (calculationArray[1] == "-" && calculationArray.length >= 7) {
        calculationArray.shift()
        calculationArray.pop()
        let removedElements = calculationArray.splice(0, 2)
        let addElementsTogether = removedElements.join("")
        calculationArray.unshift(addElementsTogether)
        console.log(calculationArray)
    }
    
    let a = calculationArray.splice(3, 2)
    

    //verifica se o primeiro caractere é um operador e remove ele
    if (calculationArray[0] == "" && calculationArray[1] == "+" ||
        calculationArray[0] == "" && calculationArray[1] == "*" ||
        calculationArray[0] == "" && calculationArray[1] == "/") {
        calculationArray.splice(0, 2)
    }

    

    let numbersArray = [];
    //converte o array de string em number
    for (let i = 0; i < calculationArray.length; i++) {
        numbersArray.push(parseFloat(calculationArray[i]));
    }

    //faz o calculo dos valores
    let calculation = numbersArray[0];
    for (let i = 0; i < calculationArray.length; i++) {
        if (calculationArray[i] == "+") {
            calculation += numbersArray[i + 1];
        } else if (calculationArray[i] == "-") {
            calculation -= numbersArray[i + 1];
        } else if (calculationArray[i] == "*") {
            calculation *= numbersArray[i + 1];
        } else if (calculationArray[i] == "/") {
            calculation /= numbersArray[i + 1];
        }
    }

    removeCalc(calculation);
}

function deletLastChar() {
    //deleta o último caractere
    const currentCalc = document.querySelector("p[id='calculation']").innerHTML;
    let currentCalcArray = currentCalc.split("");
    let calculation = "";

    //aiciona a conta de volta sem o ultimo caractere
    for (let i = 0; i < currentCalcArray.length - 1; i++) {
        calculation += currentCalcArray[i];
    }
    removeCalc(calculation)
}

function removeCalc(calculation) {
    //remove o calculo da class calculation
    let removeCalc = document.querySelector("p[id='calculation'");
    var parent = removeCalc.parentNode;
    parent.removeChild(removeCalc);

    createElementP(calculation);
}