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

