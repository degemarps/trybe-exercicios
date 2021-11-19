const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const generateEmail = (name) => {
  return {
    fullName: `${name}`,
    email: `${name.replace(' ', '_')}@trybe.com`,
  }
};

console.log(newEmployees(generateEmail));

// Desenvolva uma HOF que retorna o resultado de um sorteio.

const generateRandom = (number, callback) => {
  const chosenNumber = Math.floor(Math.random() * 6);
  const result = callback(number, chosenNumber);

  console.log(chosenNumber);

  if (result === true) {
    return 'Parabéns você ganhou';
  } 
  return 'Tente novamente';
};

const checkNumber = (number1, number2) => { if (number1 === number2) return true; return false };

console.log(generateRandom(2, checkNumber));