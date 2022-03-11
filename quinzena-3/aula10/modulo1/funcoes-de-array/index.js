// interpretação
// 1.
// a) primeiro o item ou elemento, depois o index desse elemento no array original, por fim, o novo array criado
// 2.
// a) um array onde cada elemento é um nome do elemento objeto do array original
// 3.
// a) um array com todos os elementos do array original exceto o objeto cujo atributo 'apelido' é 'Chijo'

// code 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const petsNome = pets.map(pets => {
    return pets.nome
})

// b) Crie um novo array apenas com os [cachorros salsicha]
const petsSalsicha = pets.filter (pets => {
    return pets.raca === "Salsicha"
})

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
const petsPoodle = pets.filter (pets => {
    return pets.raca === "Poodle"
})

const petsPoodleMsg = []
for (let i = 0; i < petsPoodle.length; i++) {
    let string = "Você ganhou um cupom de desconto de 10% para tosar o/a " + petsPoodle[i].nome;
    petsPoodleMsg[i] = string

}
