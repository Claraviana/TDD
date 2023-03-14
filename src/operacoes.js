
function sum(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw "Não é número"
    }
    return num1 + num2
}
function subtracao(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw "Não é número"
    }
    return num1 - num2
}
function multiplicacao(num1, num2) {
    if(num1==0||num2==0){
        throw "Não é possível";
    }
    if (isNaN(num1) || isNaN(num2)) {
        throw "Não é número";
    }
    return num1 * num2
}
function divisao(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw "Não é número"
    }
    if(num1==0||num2==0){
        throw "Não é possível"
    }
    
    return num1 / num2
}

function raiz(num1) {
    if (num1 < 0) {
        throw "Não é possível"
    }
 
    if (isNaN(num1)) {
        throw "Não é número"
    }
    return Math.sqrt(num1)
}

function potencia(num1, num2) {
    if (num1==0 ||num2==0) {
        throw "Não é possível"
    }
    if (isNaN(num1) || isNaN(num2)) {
        throw "Não é número"
    }
    return Math.pow(num1, num2)
}


 
 
 module.exports ={
     sum, 
     subtracao, 
     multiplicacao, 
     divisao, 
     raiz,
      potencia
 }
 