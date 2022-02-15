// exercícios de interpretação de código
//1.
// let array
// console.log('a. ', array)
// 'a. ' undefined

// array = null
// console.log('b. ', array)
// b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// c. 11

// let i = 0
// console.log('d. ', array[i])
// array indefinido

// array[i+1] = 19
// console.log('e. ', array)
// array indefinido

// const valor = array[i+6]
// console.log('f. ', valor)
// array indefinido

//2.
// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27


// exercícios de escrita de código

//1.
const user = [];
user[0] = prompt('nome: ');
user[1] = prompt('email: ');

console.log('O e-mail ' + user[1] + ' foi cadastrado com sucesso. Seja bem-vinda(o), '+ user[0]+'!');

//2.
const foodies = ['risoto de cogumelos', 'bruschetta de shimeji', 'crepe de alcachofra', 'tapioca recheada com mussarela vegana e cogumelos', 'penne caprese'];
console.log("Essas são as minhas comidas preferidas: ");
for (let i=0; i<foodies.length; i++) {
    console.log(foodies[i]);
}

const userFavFood = prompt('comida favorita: ');
foodies[1] = userFavFood;
for (let i=0; i<foodies.length; i++) {
    console.log(foodies[i]);
}

//3.

let listaDeTarefas = [];
listaDeTarefas[0] = prompt('primeira tarefa do dia: ');
listaDeTarefas[1] = prompt('segunda tarefa do dia: ');
listaDeTarefas[2] = prompt('terceira tarefa do dia: ');
console.log(listaDeTarefas);

let taskDone = Number(prompt('tarefa realizada: '));
const doingTasks = []
for (let i = 0; i<listaDeTarefas.length; i++) {
    if (i !== taskDone) {
        doingTasks.push(listaDeTarefas[i]);
    }
}

console.log(doingTasks);

