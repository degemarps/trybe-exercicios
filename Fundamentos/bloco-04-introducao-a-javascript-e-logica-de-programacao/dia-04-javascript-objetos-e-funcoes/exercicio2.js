function verifyPalindromo(word) {

  let splitWord = word.split("");

  let reverseWord = splitWord.reverse();

  let joinWord = reverseWord.join("");
  
  if (word == joinWord) {
    return true;

  } else {
    return false;
  }
}

let word = "arara";

console.log(verifyPalindromo(word));

console.log("-------------------------");

function verifyIndexMax(array) {
  let maior = array[0];
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
      index = i;

    }
  }

  return index;
}

let listNumbers = [2, 4, 6, 7, 10, 1];

console.log(verifyIndexMax(listNumbers));

console.log("-------------------------");

function verifyIndexMin(array) {
  let menor = array[0];
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
      index = i;

    }
  }

  return index;
}

let listNumbers2 = [2, 4, 6, 7, 10, 0, -3];

console.log(verifyIndexMin(listNumbers2));

console.log("-------------------------");

function verifyMaxName(names) {
  let name = names[0];

  for (let i = 0; i < names.length; i++) {
    if (names[i].length > name.length) {
      name = names[i];
    }
  }

  return name;
}

let listNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(verifyMaxName(listNames));

console.log("-------------------------");

function verifyNumberTimes(numbers) {
  let unique = [...new Set(numbers)];
  let conts = [];

  for (let i = 0; i < unique.length; i++) {
    conts.push(0);
    for (number of numbers){
      if (unique[i] == number) {
        conts[i] += 1;
      }
    }
  }

  let maiorCont = conts[0];
  let maiorNumber = unique[0];

  for (let i = 0; i < conts.length; i++) {

    if (conts[i] > maiorCont) {

      maiorCont = conts[i];
      maiorNumber = unique[i];
    }
  }

  return maiorNumber
}

let numbers = [2, 3, 2, 5, 8, 2, 3];

console.log(verifyNumberTimes(numbers));

console.log("-------------------------");

function sum(number) {
  
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}

console.log(sum(5));

console.log("-------------------------");

