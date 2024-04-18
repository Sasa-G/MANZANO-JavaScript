/*Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */

let valor
valor=parseInt(prompt("Insira o numero que sera multiplicado"))

for (let numero = 0; numero < 11; numero++) {
    console.log(`${valor} X ${numero} = ` + valor*numero);
    
}