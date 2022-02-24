// interpretação

// 1.
// a) paridade de um número
// b) números pares
// c) números ímpares


// 2.
// a) testa a entrada do usuário e assinala um valor à variável preco de acordo com o resultado do teste
// b) "O preço da fruta Maçã é, R$ 2.25"
// c) o preço da Pêra seria de R$ 5


// 3.
// a) recebendo a entrada do usuário e assinalando à variável 'numero'
// b) 10:Esse número passou no teste\nEssa mensagem é secreta!!! -10: error msg
// c) 'mensagem' não foi definida pois é declarada dentro do escopo 'if'

// code


// 1.
// a & b)
let idade = Number(prompt("idade:"))

// c)
if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// 2.
let turno = prompt("turno(M/V/N): ")
if (turno === "M") {
    console.log("Bom dia")
}
else if (turno === "V") {
    console.log("Boa tarde")
}
else if (turno === "N") {
    console.log("Boa noite")
}

// 3.
let turno = prompt("turno(M/V/N): ")

switch (turno) {
    case 'M':
        console.log("Bom dia")
        break;
    case 'V':
        console.log("Boa tarde")
        break;
    case 'N':
        console.log("Boa noite")
        break;

    default:
        break;
}

// 4.
let genero = prompt("genero: ")
let preco = Number(prompt("preco: "))
if (genero === "fantasia" && preco < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
