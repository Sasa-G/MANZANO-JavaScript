/*Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.*/

let valor, resultados;
let contadora =0

valor=parseInt(prompt("Escreva o valor da tabuada: "));

while(contadora < 10){
    contadora = contadora + 1
    resultados=parseInt(valor * contadora);
    alert(`${valor} X ${contadora} = ${resultados}`)

}