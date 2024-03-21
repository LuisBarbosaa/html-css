function exe1(){
    let num1 = Number (document.getElementById("num1").value)
    let num2 = Number (document.getElementById("num2").value)
    let resultado = num1 - num2
    alert("a subtração é " + resultado)
}
function exe2(){
    let num1 = Number (document.getElementById("num1").value)
    let num2 = Number (document.getElementById("num2").value)
    let resultado = num1 * num2
    alert("a multiplicação é " + resultado)   
}
function exe3(){
    let num1 = Number (document.getElementById("num1").value)
    let num2 = Number (document.getElementById("num2").value)
    let resultado = num1 / num2
    alert("a divisão é " + resultado)
}
function exe4(){
    let nota1 = Number (document.getElementById("nota1").value)
    let nota2 = Number (document.getElementById("nota2").value)
    let resultado = (nota1 * 2 + nota2 * 3) / 5
    alert("a media final é " + resultado)
}
function exe5(){
    let valorp = Number (document.getElementById("valorp").value)
    let resultado = valorp - (valorp * 10) / 100
    alert("o valor final é " + resultado)
}
function exe6(){
    let salariof = Number (document.getElementById("salariof").value)
    let valortv = Number (document.getElementById("valortv").value)
    let resultado = salariof + valortv * 4 / 100
    alert("o salario final é " + resultado)
}
function exe7(){
    let peso = Number (document.getElementById("peso").value)
    let mais15= peso + peso * 15 / 100
    let menos20= peso - peso * 20 / 100
    alert("caso voce engorde 15% seu peso é " + mais15)
    alert("caso voce perca 20% seu peso é " + menos20)  
}
function exe8(){
    let peso = Number (document.getElementById("peso").value)
    let gramas = peso * 1000
    alert("seu peso em gramas é " + gramas)
}
function exe9(){
    let basem = Number (document.getElementById("basem").value)
    let basema = Number (document.getElementById("basema").value)
    let altura = Number (document.getElementById("altura").value)
    let area = ((basema + basem) * altura) / 2
    alert("a area do trapezio é " + area)
}
function exe10(){
    let ladoq = Number (document.getElementById("ladoq").value)
    let area = ladoq * ladoq
    alert("a area do quadrado é " + area)
}
