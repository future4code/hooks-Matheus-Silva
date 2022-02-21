let namePlaceholder;
let agePlaceholder;

console.log(typeof namePlaceholder);
console.log(typeof agePlaceholder);
//undefined
//undefined
//variables declated but not yet assigned a value, therefore the undefined type

namePlaceholder = prompt("insira seu nome");
agePlaceholder = prompt("insira sua idade");

console.log(typeof namePlaceholder);
console.log(typeof agePlaceholder);
//string
//string
//o input do usuário foi aceito como string

console.log(`Olá ${namePlaceholder}, você tem ${agePlaceholder} anos`);

