//Primeira atividade

let a = 8;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Segunda atividade

const num1 = 3;
const num2 = 4;

if (num1 > num2) {
  console.log("O maior valor é o primeiro");

} else {
  console.log("O maior valor é o segundo");

}

//Terceira atividade

const num3 = 2;

if (num1 > num2 && num1 > num3) {
  console.log("O maior valor é o primeiro");

} else if (num2 > num1 && num2 > num3) {
  console.log("O maior valor é o segundo");

} else if (num3 > num1 && num3 > num2) {
  console.log("O maior valor é o terceiro");

} else {
  console.log("Não existe algum valor maior que os demais");
}

//Quarta atividade

const num = 1;

if (num > 0) {
  console.log("positive");

} else if (num < 0) {
  console.log("negative");

} else {
  console.log("zero");
}

//quinta atividade

const angle1 = 60;
const angle2 = 60;
const angle3 = 60;

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
  console.log("Um dos valores informados é inválido! Tente novamente!");

} else if ((angle1 + angle2 + angle3) == 180) {
  console.log("true");

} else {
  console.log("false");
}

//sexta atividade

let peca = "Bispo";

peca = peca.toLowerCase();

if (peca == "rei") {
  console.log("Rei se movimenta, se deslocando uma casa na direção horizontal, vertical ou diagonal.");

} else if (peca == "dama") {
  console.log("A Dama também chamada de Rainha possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais.");

} else if (peca == "torre") {
  console.log("A Torre move-se em linha reta nas colunas e fileiras do Tabuleiro.");

} else if (peca == "bispo") {
  console.log("O Bispo movimenta-se em linhas retas nas diagonais do tabuleiro. ");

} else if (peca == "cavalo") {
  console.log("O Cavalo pode mover para a casa mais próxima de onde está desde que não seja na mesma coluna, diagonal ou fileiras do Tabuleiro, com o formato característico da letra L.");

} else if (peca == "peao" || peca == "peão") {
  console.log("Peão se movimenta para a casa desocupada imediatamente a sua frente na mesma coluna ou no primeiro movimento opcionalmente por duas casas na mesma coluna desde que ambas as casas estejam desocupadas.");

} else {
  console.log("Peça inválida!");

}

//sétima atividade

const nota = 10;

if (nota < 0 || nota > 100) {
  console.log("Nota informada é inválida!");

}else if (nota >= 90) {
  console.log("A");

} else if (nota >= 80) {
  console.log("B");

} else if (nota >= 70) {
  console.log("C");

} else if (nota >= 60) {
  console.log("D");

} else if (nota >= 50) {
  console.log("E");

} else if (nota < 50) {
  console.log("F");

}

//oitava atividade

const valor1 = 4;
const valor2 = 3;
const valor3 = 5;

