/*Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o
valor da média do aluno para qualquer condição*/

let valor1, valor2, valor3, valor4, notamedia;

nota1 = parseFloat(prompt("Digite a 1º Nota: "));
nota2 = parseFloat(prompt("Digite a 2º Nota: "));
nota3 = parseFloat(prompt("Digite a 3º Nota: "));
nota4 = parseFloat(prompt("Digite a 4º Nota: "));

notamedia = (nota1 + nota2 + nota3 + nota4) / 4

if(notamedia >= 5){
    alert (`O aluno foi aprovado com a media de: ${notamedia}`)
}
else{
    alert (`O aluno foi reprovado com a media de: ${notamedia}`)}
