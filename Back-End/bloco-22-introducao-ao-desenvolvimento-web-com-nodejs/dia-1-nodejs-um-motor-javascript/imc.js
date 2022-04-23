const readline = require('readline-sync');

const altura = readline.questionFloat('Digite a sua altora em metros (ex: 1.62): ');
const peso = readline.questionFloat('Digite o seu peso em quilos (ex: 70.5): ');

const imc = peso / (altura**2);

console.log(`IMC: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log('Abaixo do peso (magreza)');
} else if (imc >= 18.5 && imc < 25) {
  console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
  console.log('Acima do peso (sobrepeso)');
} else if (imc >= 30 && imc < 35) {
  console.log('Obesidade grau I');
} else if (imc >= 35 && imc < 40) {
  console.log('Obesidade grau II');
} else if (imc >= 40) {
  console.log('Obesidade graus III e IV');
}