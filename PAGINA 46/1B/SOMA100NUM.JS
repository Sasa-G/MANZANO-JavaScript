/*Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)*/

let contadora = 1
let soma = 0

while( contadora <= 100){
    soma += contadora
    contadora ++
    console.log(`A soma dos numero de 1 até 100 é de ${soma}`)
}