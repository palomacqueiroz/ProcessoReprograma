// calcular projeto
// valorHora = calculado function calcularValorHora()

var inputValorHora = document.querySelector("#valor-hora")
var inputHorasProjeto = document.querySelector("#horas-projeto")
var resultado = document.querySelector("#resposta")

function calcular(){
    var valorHora = inputValorHora.valueAsNumber
    var horasProjeto = inputHorasProjeto.valueAsNumber
    var valorProjeto = valorHora * horasProjeto
    var valorDuasCasas = valorProjeto.toFixed(2)
    resultado.textContent = "Você ganhou R$ " + valorDuasCasas + " com este Projeto."
}
