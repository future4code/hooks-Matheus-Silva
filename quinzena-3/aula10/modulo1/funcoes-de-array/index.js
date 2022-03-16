// interpretação
// 1.
// a) primeiro o item ou elemento, depois o index desse elemento no array original, por fim, o novo array criado
// 2.
// a) um array onde cada elemento é um nome do elemento objeto do array original
// 3.
// a) um array com todos os elementos do array original exceto o objeto cujo atributo 'apelido' é 'Chijo'

// code 
// 1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// a) 
const petsNome = pets.map(pets => {
    return pets.nome
})

// b) 
const petsSalsicha = pets.filter (pets => {
    return pets.raca === "Salsicha"
})

// c)
const petsPoodle = pets.filter (pets => {
    return pets.raca === "Poodle"
}).map(petPoodle => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${petPoodle.nome}`;
})

// 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a) 
const produtosNome = produtos.map(produtos => {
    return produtos.nome
})

// b) 
const produtosDesconto = produtos.map(produtos => {
    return {nome: produtos.nome,  preco: produtos.preco*0.95}
})

// c) 
const produtosBebidas = produtos.filter(produtos => {
    return produtos.categoria === "Bebidas"
})

// d) 
const produtosYpe = produtos.filter(produtos => {
    return produtos.nome.match("\.\*Ypê$")
})

// e) 
const produtosFraseMarca = produtos.filter(produtos => {
    return produtos.nome.match("\.\*Ypê$")
}).map(produtoMarca => {
    return `Compre ${produtoMarca.nome} por ${produtoMarca.preco}`
})