function exe1() {
    let nome = Text(document.getElementById("nome").value)
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let trabalho = Number(document.getElementById("trabalho").value)
    let tarefa = Number(document.getElementById("tarefa").value)

    let media = (nota1 + nota2 + trabalho + tarefa) / 7

    if (media >= 6 && media <= 10){
        mensagem = (nome+"Voce esta aprovado")
    } else {
        mensagem = ("Voce esta de recuperação")
    }

    document.getElementById("resultado").innerHTML = mensagem
}