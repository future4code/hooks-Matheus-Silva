/*
2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
*/
const respostas = [];

respostas[0] = prompt("sente frio?");
respostas[1] = prompt("sente fome?");
respostas[2] = prompt("sente medo?");

respostaUm = respostas[0];
respostaDois = respostas[1];
respostaTres = respostas[2];

console.log("sente frio? -", respostaUm);
console.log("sente fome? -", respostaDois);
console.log("sente medo? -", respostaTres);
