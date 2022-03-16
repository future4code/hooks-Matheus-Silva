// Interpretação
// 1.
// adicionana uma unidade a cada iteração à variável 'valor'. 5=resultado impresso
// 2.
// a)
// itera sobre elementos do array 'lista', verificando valores menores que '18' e imprimindo na tela
// b)
// é suficiente, basta acrescentar o método .entries() na chamada do array, armazenar o index e imprimir o resultado
// 3.
// *
// **
// ***
// ****


// code
// 1.
nroPets = Number(prompt("bichos de estimacao: "))
nomesPets = [];
// a)
if (nroPets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
}
// b)
else {
    for (let i = nroPets; i > 0; i--) {
        nomePet = prompt("nome dos bichos de estimacao: ")
        nomesPets.push(nomePet)
    }
// c)
    console.log(nomesPets)
}


const arrayOriginal = [1,2,3,4,5];

for(const value of arrayOriginal){
    console.log(value);
}


// 2.
// a)
for(const value of arrayOriginal){
    console.log(value);
}
// b)
for(const value of arrayOriginal){
    console.log(value/10);
}
// c)
const apenasPares = []
for(const value of arrayOriginal){
    if (value % 2 === 0) {
        apenasPares.push(value)
    }
}
console.log(apenasPares);
// d)
arrayStrings = []
for(const [index,value] of arrayOriginal.entries()){
    arrayStrings.push(`O elemento do índex ${index} é: ${value}`)
}
console.log(arrayStrings)
// e)
maiorNum = Math.max(...arrayOriginal)
menorNum = Math.min(...arrayOriginal)
console.log(maiorNum, menorNum)