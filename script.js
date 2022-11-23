//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b) 

let a = 2;
let b = 60;

const adicao = a + b;
console.log(adicao);

const subtracao = a - b;
console.log(subtracao);

const multiplicacao = a * b;
console.log(multiplicacao);

const divisao = a / b;
console.log(divisao);

const modulo = a % b;
console.log(modulo);

const number1 = 10;
const number2 = 20;
if (
  number1 > number2
) {console.log('number1 é maior que number2')}
else {console.log('number2 é maior que number1')};

const n1 = 654;
const n2 = 466;
const n3 = 155;

if (n1 > n2 && n1 > n3) {
  console.log('O maior número é ' + n1 + '(n1)') 
}
else if (n2 > n1 && n2 > n3) {
  console.log('O maior número é ' + n2 + '(n2)')
}
else {
  console.log('O maior número é ' + n3 + '(n3)')
};