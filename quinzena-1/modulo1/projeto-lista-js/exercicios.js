// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const height = Number(prompt('altura: '));
  const length = Number(prompt('largura: '));

  console.log(height * length);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const currentYear = Number(prompt('ano atual: '));
  const birthdayYear = Number(prompt('ano de nascimento: '));

  console.log(currentYear-birthdayYear);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura*altura);
  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const name = prompt('nome: ');
  const age = prompt('idade: ');
  const email = prompt('email: ');
  console.log("Meu nome é "+name+", tenho " + age + " anos, e o meu email é "+email+".");

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const colors = [];
  colors[0] = prompt('cor1: ');
  colors[1] = prompt('cor2: ');
  colors[2] = prompt('cor3: ');

  console.log(colors);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const numTickets = custo/valorIngresso;
  return numTickets;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const result = (string1.length === string2.length) ? true : false;
  return result;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let firstElement = array.shift();
  let lastElement = array.pop();
  array.push(firstElement);
  array.unshift(lastElement);

  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const result = (string1.toUpperCase() === string2.toUpperCase()) ? true: false;
  return result;
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const userInput = [];
  userInput[0] = Number(prompt('ano atual: '));
  userInput[1] = Number(prompt('ano de nascimento: '));
  userInput[2] = Number(prompt('ano de emissao do RG: '));
  const age = userInput[0] - userInput[1];
  let ageGroup = 3;
  if (age <= 20) {
    ageGroup = 0;
  } else if (20 < age && age <= 50) {
    ageGroup = 1;
  } else{
    ageGroup = 2;
  }

  let result = false;
    
  switch(ageGroup) {
    case 0:
      result = (userInput[0] - userInput[2] >= 5) ? true : false;
      break;
    case 1:
      result = (userInput[0] - userInput[2] >= 10) ? true : false;
      break;
    case 2:
      result = (userInput[0] - userInput[2] >= 15) ? true : false;
      break;
    default:
      break;
  }
  
  console.log(result);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const result = (!(ano % 400) || (!(ano % 4) && (ano % 100)) ? true : false);
  return result;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const validCase = ["sim", "sim", "sim"];
  const userInput = [];
  userInput[0] = prompt('tem mais de 18?: ');
  userInput[1] = prompt('tem ensino médio completo?: ');
  userInput[2] = prompt('tem disponibilidade de horários?: ');

  let result = (validCase.every((value, index) => value === userInput[index])) ? true : false;
  console.log(result);

}