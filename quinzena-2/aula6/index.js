// interpretação
//1.
//a)10\n50
//b)50

//2.
// a)converte a entrada do usuário para minúsculas e procura pela string cenoura
// b)'true' em todos os casos


// code
// 1.
// a)
function printPhrase(){
    console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
}
// b)
function noPrivacy(name, age, addr, occ) {
    console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${addr} e sou ${occ}.`)
}


// 2.
// a)
const addNumbers = (num1,num2) => {
    return num1 + num2
}

console.log(addNumbers(3,5))

// b)
const isBigger = (num1, num2) => {
    return (num1 >= num2) ? true : false
}

// c)
const isEven = (num) => {
    return (num % 2 === 0) ? true : false
}

// d)
const upperLength = (msg) => {
    return msg.length + " " + msg.toUpperCase()
}

// 3.

const add = (n1, n2) => {
    return n1 + n2
}

const sub = (n1, n2) => {
    return n1 - n2
}

const mult = (n1, n2) => {
    return n1 * n2
}

const div = (n1, n2) => {
    return n1 / n2
}


const uiNum = []
uiNum[0] = prompt("n1: " )
uiNum[1] =prompt("n2: " )

console.log("Números inseridos: " + uiNum[0] + " e " + uiNum[1])
console.log("Soma: " + add(uiNum[0], uiNum[1]))
console.log("Diferença: " + sub(uiNum[0], uiNum[1]))
console.log("Multiplicação: " + mult(uiNum[0], uiNum[1]))
console.log("Divisão: " + div(uiNum[0], uiNum[1]))
