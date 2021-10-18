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