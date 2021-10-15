let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbers2 = numbers;

for (let i = 0; i < numbers2.length; i++) {
  if ((i+1) == numbers2.length){
    numbers2[i] = numbers2[i] * 2;

  } else {
    numbers2[i] = numbers2[i] * numbers2[i+1];
  }
}

console.log(numbers2);