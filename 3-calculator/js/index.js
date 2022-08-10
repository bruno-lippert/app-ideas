// let calculator = new Calculator()
function calculator(x) {
    let calculation = document.getElementById("calculation")
    let contentCalculation = document.createTextNode(x)
    calculation.appendChild(contentCalculation)
    return x
}

function result() {
    let calculationString = document.querySelector("p[id='calculation']").innerHTML
    let calculationArray = calculationString.split(" ")
    
    let numbersArray = []

    //converte o array de string em number
    for (let i = 0; i < calculationArray.length; i++) {
        numbersArray.push(parseInt(calculationArray[i]))
    }
    //faz o calculo dos valores
    let calculation = numbersArray[0]
    for (let i = 0; i < calculationArray.length; i++) {
        if (calculationArray[i] == "+") {
            calculation += numbersArray[i+1]
        } else if (calculationArray[i] == "-") {
            calculation -= numbersArray[i+1]
        } else if (calculationArray[i] == "*") {
            calculation *= numbersArray[i+1]
        } else if (calculationArray[i] == "/") {
            calculation /= numbersArray[i+1]
        }
    }

    console.log(calculation)
    console.log(numbersArray)

    // let numbers = calculation.split("+")
    // let operations = calculation.split(" + ")
    // operations = operations.parse
    // console.log(numbers)
    // console.log(operations)
}