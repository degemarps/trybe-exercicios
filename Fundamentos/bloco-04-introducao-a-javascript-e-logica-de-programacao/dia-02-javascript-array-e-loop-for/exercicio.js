let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let number of numbers) {
  console.log(number);

  soma = soma + number;
}

console.log("Soma de todos os valores: " + soma);
console.log("Média aritmética: " + (soma/numbers.length));