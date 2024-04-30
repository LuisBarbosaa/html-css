function exe1(){
    let nota1 = Number (document.getElementById("nota1").value)
    let nota2 = Number (document.getElementById("nota2").value)
    let nota3 = Number (document.getElementById("nota3").value)
    let nota4 = Number (document.getElementById("nota4").value)

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    let mensagem
    if (media >= 0 && media < 3){
        mensagem = "Reprovado com média " + media
    }
      else if (media >= 3 && media < 7){
        mensagem = 'Exame com média ' +media
    }
      else if (media >= 7 && media <= 10){
        mensagem = 'Aprovado com média ' +media
    }
    document.getElementById("resultado") .innerHTML = mensagem  

}
        
function exe2(){
    let nota1 = Number (document.getElementById("nota1").value)
    let nota2 = Number (document.getElementById("nota2").value)
    let media = (nota1 + nota2) / 2
    let mensagem
    if (media >= 0 && media < 3){
        mensagem = "reprovado " 
    }
      else if (media >= 3 && media < 7){
        mensagem = 'exame ' 
    }
      else if (media > 7 && media <= 10){
        mensagem = 'aprovado ' 
    }
    document.getElementById("resultado") .innerHTML = mensagem 

}
function exe3(){
    let num1 = Number (document.getElementById("num1").value)
    let num2 = Number (document.getElementById("num2").value)
    let mensagem
    if (num1 > num2){
        mensagem = "o numero maior é " +num1
    }
    else{
        mensagem = "o numero maior é " +num2
    }
    document.getElementById("resultado") .innerHTML = mensagem
}
function exe4(){
    let num1 = Number (document.getElementById("num1").value)
    let num2 = Number (document.getElementById("num2").value)
    let num3 = Number (document.getElementById("num3").value)
    let mensagem
    if (num1 > num2 && num1 > num3){
       mensagem = "o numero maior é o " +num1
    }
    else if (num2 > num1 && num2 > num3){
        mensagem = "o numero maior é o " +num2
    }
    else if (num3 > num1 && num3 > num2){
        mensagem = "o numero maior é o " +num3
    }
    document.getElementById("resultado") .innerHTML = mensagem
}

function exe5(){
    let num1 = Number (document.getElementById("num1").value)
    let num2 = Number (document.getElementById("num1").value)
    let escolha = Number (document.getElementById("escolha").value)
    let resultado
    switch (escolha) {
        case 1: let media = (num1 + num2) / 2
        resultado = "a media é " +media
            break
    
        case 2: let diferenca
        if (num1 >= num2){
            diferenca = num1 - num2
        }
        else {
            diferenca = num2 - num1
        }
        resultado = " diferença entre os numeros é " +diferenca
            break

        case 3: let produto = num1 * num2
        resultado = "o produto dos numeros é " +produto
            break

        case 4: let divisao = num1 / num2
        resultdo = "a divisao entre os dois numeros é " +divisao
            break  
    }
    document.getElementById("resultado") .innerHTML = resultado
}
function exe6(){
    let num1 = Number (document.getElementById("num1").value)
    let num2 = Number (document.getElementById("num2").value)
    let escolha = Number (document.getElementById("escolha").value)
    let resultado
    switch (escolha) {
        case 1: let elevado = num1 ** num2
        resultado = +elevado
            break
    
        case 2:
                let raiz = Math.sqrt(num1);
                let raiz2 = Math.sqrt(num2);
        resultado = "a raiz do",num1 , "é: " +raiz
        resultado = "e a raiz do ", num2, "é:  " +raiz2
            break

        case 3:
                let cubica = Math.cbrt(num1)
                let cubica2 = Math.cbrt(num2)
        resultado = "a raiz cubica do",num1 , "é: " +cubica 
        resultado = "a raiz cubica do",num2 , "é: " +cubica2
            break    
}
       document.getElementById("resultado") .innerHTML = resultado 
}
function exe7(){
    let salario = Number (document.getElementById("salario").value)
    let auxilio = salario + salario * 30 / 100
    let mensagem
    if (salario >= 500){
        mensagem = "seu salario continua o mesmo"
    } else if (salario < 500){
        mensagem = "seu novo salario é " +auxilio
    }
    document.getElementById("resultado") .innerHTML = mensagem
      
}
function exe8(){
    let salario = Number (document.getElementById("salario").value)
    let quinze = salario + salario * 15 / 100
    let trinta = salario + salario * 35 / 100
    let mensagem
    if (salario <= 300){
        mensagem = "seu salario aumentara para " +trinta
    } else if (salario > 300){
        mensagem = "seu salario aumentara para " +quinze
    }
    document.getElementById("resultado") .innerHTML = mensagem
}
function exe9(){
    let saldo = Number (document.getElementById("saldo").value)
    let dez = saldo + saldo * 10 / 100
    let vinte = saldo + saldo * 20 / 100
    let vintec = saldo + saldo * 25 / 100
    let trinta = saldo + saldo * 30 / 100
    let mensagem
    if (saldo <= 200){
        mensagem = "O seu credito é de 10% e seu saldo medio aumentara para " +dez
    }else if (saldo > 200 && saldo <= 300){
        mensagem = "O seu credito é de 20% e seu saldo medio aumentara para " +vinte
    }else if (saldo <= 400 && saldo > 300){
        mensagem = "O seu credito é de 25% e seu saldo medio aumentara para " +vintec
    }else if (saldo > 400){
        mensagem = "O seu credito é de 30% e seu saldo medio aumentara para " +trinta
    }
    document.getElementById("resultado") .innerHTML = mensagem
}
function exe10(){
    let fabrica = Number (document.getElementById("fabrica").value)
    let cinco = fabrica + fabrica * 5 / 100
    let dez = fabrica + fabrica * 10 / 100 + fabrica * 15 / 100
    let quinze = fabrica + fabrica * 15 / 100 + fabrica * 20 / 100
    let mensagem
    if ( fabrica <= 12.000){
        mensagem = "O preço sera " +cinco
    }else if (fabrica < 12.000 && fabrica <= 25.000){
        mensagem = "O preço sera " +dez
    }else if (fabrica < 25.000){
        mensagem = "O preço sera " +quinze
    }
    document.getElementById("resultado") .innerHTML = mensagem
}
function exe22(){
    let idade = Number (document.getElementById("idade").value)
    let peso = Number (document.getElementById("peso").value)
    let mensagem
    if (idade < 20 && peso <= 60){
        mensagem = "Voce esta a baixo do peso"
    }else if (idade < 20 && peso >= 60 && peso <= 90){
        mensagem = "Voce esta no peso normal"
    }else if (idade < 20 && peso > 90){
        mensagem = "Voce esta a cima do peso"
    }else if (idade >= 20 && idade <= 50 && peso <= 60){
        mensagem = "Voce esta a baixo do peso"
    }else if (idade >= 20 && idade <= 50 && peso >= 60 && peso <= 90){
        mensagem = "Voce esta no peso normal"
    }else if (idade >= 20 && idade <= 50 && peso > 90){
        mensagem = "Voce esta a cima do peso"
    }else if (idade > 50 && peso <= 60){
        mensagem = "Voce esta a baixo do peso"
    }else if (idade > 50 && peso >= 60 && peso <= 90){
        mensagem = "Voce esta no peso normal"
    }else if (idade > 50 && peso > 90){
        mensagem = "Voce esta a cima do peso"
    }
    document.getElementById("resultado") .innerHTML = mensagem
}
function exe23(){
    let codigo = Number (document.getElementById("codigo").value)
    let qnt = Number (document.getElementById("quantidade").value)
    let escolha = Number (document.getElementById("escolha").value)
    let mensagem
    
    switch (escolha){
    case 1:
        if (codigo <= 10){
        mensagem = "O valor unitario do produto é R$ 10.00"
    }else if (codigo > 10 && codigo <= 20){
        mensagem = "O valor unitario do produto é R$ 15.00"
    }else if (codigo > 20 && codigo <= 30){
        mensagem = "O valor unitario do produto é R$ 20.00"
    }else if (codigo > 30 && codigo <= 40){
        mensagem = "O valor unitario do produto é R$ 30.00"
    }
    break

    case 2:
        let preco1 = 10.00
        let preco2 = 15.00
        let preco3 = 20.00
        let preco4 = 30.00
        let precoNota 
        if (precoNota == preco1){
            mensagem = "O PREÇO TOTAL DA NOTA É " (+preco1 * +qnt)
        }else if (precoNota == preco2){
            mensagem = "O PREÇO TOTAL DA NOTA É " (+preco2 * +qnt)
        }else if (precoNota == preco3){
            mensagem = "O PREÇO TOTAL DA NOTA É " (+preco3 * +qnt)
        }else if (precoNota == preco4){
            mensagem = "O PREÇO TOTAL DA NOTA É " (+preco4 * +qnt)
        }
        
    break

    case 3:
        let valor1 = 10.00
        let valor2 = 15.00
        let valor3 = 20.00
        let valor4 = 30.00
        let precoN = ((valor1 || valor2 || valor3 || valor4) * qnt)
        if (precoN <= 250.00){
            mensagem = "o desconto é de 5%"
        }else if (precoN > 250.00 && precoN <= 500.00){
            mensagem = "o desconto é de 10%"
        }else if (precoN > 500.00){
            mensagem = "o desconto é de 15%"
        }
        break

        case 4:
            let nota1 = 10.00
            let nota2 = 15.00
            let nota3 = 20.00
            let nota4 = 30.00
            let notaF = ((nota1 || nota2 || nota3 || nota4) * qnt)    
            if (notaF <= 250.00){
                precoF1 = notaF - notaF * 5 / 100 
                mensagem = "o valor final é de " +precoF1
            }else if (precoN > 250.00 && precoN <= 500.00){
                precoF2 = notaF - notaF * 10 / 100
                mensagem = "o valor final é de " +precoF2
            }else if (precoN > 500.00){
                precoF3 = notaF - notaF * 15 / 100 
                mensagem = "o valor final é de " +precoF3
            }
        break
    }
    document.getElementById("resultado") .innerHTML = mensagem
}
