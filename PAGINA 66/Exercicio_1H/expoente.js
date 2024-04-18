/* Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE
, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^). */

let expoente=parseInt(prompt("Escreva um valor para a base da exponeciação"));
let base=parseInt(prompt("Escreva um valor para a Base"))

let expoentes=parseInt(expoente * expoente);
let expoente_resultado=parseInt(expoentes * expoente);

console.log("elevado a", expoente, "é igual a", expoente_resultado);
