/* Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor*/

let valor1
let valor2
let diferenca

valor1 = parseInt(prompt("Digite um valor: "));
valor2 =parseInt(prompt("Digiteb outro valor: "));

diferenca = valor1 - valor2
if (valor2 > valor1){
    diferenca = valor2 - valor1 
}

alert(`A diferença dos valores é ${diferenca}`)