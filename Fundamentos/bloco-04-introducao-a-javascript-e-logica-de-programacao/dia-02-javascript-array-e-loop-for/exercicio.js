let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let number of numbers) {
  console.log(number);

  soma = soma + number;
}

console.log("Soma de todos os valores: " + soma);

let media = soma/numbers.length;

console.log("Média aritmética: " + media);

if (media > 20) {
  console.log("valor maior que 20");

} else {
  console.log("valor menor ou igual a 20");
}

let maior = numbers[0];

for (number of numbers) {
  if (number > maior) {
    maior = number;

  }
}

console.log("O maior valor do array é: " + maior);

let quantImpar = 0;

for (number of numbers) {
  if (number % 2 == 1) {
    quantImpar++;
  }
}

if (quantImpar == 0) {
  console.log("nenhum valor ímpar encontrado");

} else {
  console.log(quantImpar + " valores ímpares encontrados");
}

let menor = numbers[0];

for (number of numbers) {
  if (number < menor) {
    menor = number;

  }
}

console.log("O menor valor do array é: " + menor);

let numeros = [];

for (let num = 1; num < 26; num++) {
  numeros[num-1] = num;
}

console.log(numeros);

for (num of numeros) {
  console.log(num/2);
}