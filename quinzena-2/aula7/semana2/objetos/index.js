// interpretação
// 1.
// a)"Matheus Nachtergaele"\n"Virginia Cavendish"\nObject:\ncanal: "Canal Brasil"\nhorario: "19h"

// 2.
// a)
    // nome: "Juca", 
	// idade: 3, 
	// raca: "SRD"

    // nome: "Juba", 
	// idade: 3, 
	// raca: "SRD"

    // nome: "Juco", 
	// idade: 3, 
	// raca: "SRD"
// b)
// copia o conteúdo de outro objeto 

// 3.
// a)false\nundefined 
// b)propriedade 'altura' indefinida

// escrita

// 1.
// a)

const pessoa = {
    nome: "nome",
    listaDeApelidos: ["apelido1", "apelido2", "apelido3"]
}

const printPhrase = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.listaDeApelidos[0]}, ${objeto.listaDeApelidos[1]} ou ${objeto.listaDeApelidos[2]}`)
}

printPhrase(pessoa)

// b)

const outraPessoa = {
    ...pessoa,
    listaDeApelidos: ["outroApelido1","outroApelido2","outroApelido3"]
}

printPhrase(outraPessoa)

// 2.
// a)
const obj1 = {
    nome: "nome1",
    idade: "idade1",
    profissao: "profissao1"
}

const obj2 = {
    nome: "nome2",
    idade: "idade2",
    profissao: "profissao2"
}

// b)

const printArray = (object) => {
    console.log([object.nome, object.nome.length, object.idade, object.profissao, object.profissao.length])
}

printArray(obj1)

// 3.
// a)
const carrinho = []
// b)
const frutaUm = {
    nome: "kiwi",
    disponibilidade: "true"
}

const frutaDois = {
    ...frutaUm,
    nome: "uva"
}

const frutaTres = {
    ...frutaUm,
    nome: "abacate"
}

// c)
const addToCart = (item1, item2, item3) => {
    carrinho.push(item1)
    carrinho.push(item2)
    carrinho.push(item3)
}

addToCart(frutaUm, frutaDois, frutaTres)

// d)
console.log(carrinho)

