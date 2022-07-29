function convertBinary(){
    let numBinaryArrayString = document.getElementById("numBinario").value.split('')
    //numBinaryArrayString
    for(let i = 0; i < numBinaryArrayString.length; i++){
        if(numBinaryArrayString[i] != "0" && numBinaryArrayString[i] != "1"){
            return alert("Insira apenas números binários(0 e 1)")
        }else if (numBinaryArrayString.length > 8){
            return alert("O número binário deve conter no máximo 8 caracteres")
        }else if(numBinaryArrayString[i] == null){
            return alert("Isira um número!")
        }
    }
    
    numBinaryArrayString.reverse()
    
    let expoente = 0
    let arrayValoresComPotencia = numBinaryArrayString.map(element => {
        let num = parseInt(element)
        let result = Math.pow(2, expoente) * num
        expoente += 1
        return result
    })
    
    let total = 0
    arrayValoresComPotencia.forEach(element => total += element)
    
    if(total > 0){
        let inputResult = document.getElementById("resultado")
        inputResult.setAttribute("value", total)
    }else {
        alert("Insira um número binário!")
    }
    
}
