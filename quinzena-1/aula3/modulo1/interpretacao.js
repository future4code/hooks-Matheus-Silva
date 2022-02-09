let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
/*
 * 10
 * 10 5
 */

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
// creio que vá exibir uma mensagem de erro pois 'c' nao foi definida

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
//'p' poderia ser nomeada dailyWorkHours/horasTrabalhoDiario
//'t' dailySalary/ganhoDiario
