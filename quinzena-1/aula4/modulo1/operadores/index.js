// Exercícios de interpretação de código

/*
1.
a. false
b. false
c. true
d. bool

2 && 3.
O código irá realizar uma concatenação das strings, 
caso ele queira de fato somar os valores numéricos inseridos, 
deverá realizar um type casting antes da operação.
*/

//Exercícios de escrita de código
//1.
let userAge = Number(prompt("insira sua idade"));
let bfAge = Number(prompt("insira idade do seu melhor amigo"));
console.log("Sua idade é maior do que a do seu melhor amigo?", userAge > bfAge);


//2.
let evenNum = Number(prompt("insira um número par"));
console.log(evenNum % 2);
//resto será sempre zero(para números pares) ou um(para ímpares)

//3.
let userAge = Number(prompt("insira sua idade"));
console.log(userAge*12);
console.log(userAge*365);
console.log(userAge*8766);

//4.
let firstNum = Number(prompt("insira um número"));
let secondNum = Number(prompt("insira outro número"));
console.log("O primeiro numero é maior que segundo?", firstNum > secondNum);
console.log("O primeiro numero é igual ao segundo?", firstNum === secondNum);
console.log("O primeiro numero é divisível pelo segundo?", !Boolean(firstNum % secondNum));
console.log("O segundo numero é divisível pelo primeiro?", !Boolean(secondNum % firstNum));

 
 