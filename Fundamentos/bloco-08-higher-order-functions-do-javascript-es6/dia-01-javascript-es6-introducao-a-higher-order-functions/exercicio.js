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

  if (result === true) {
    return 'Parabéns você ganhou';
  } 
  return 'Tente novamente';
};

const checkNumber = (number1, number2) => { if (number1 === number2) return true; return false };

console.log(generateRandom(3, checkNumber));

// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
// o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é 
// uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela 
// pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
};

const checkAnswers = (rightAnswers, studentAnswers) => {
  let finalResult = 0;
  rightAnswers.forEach((element, index) => {
    if (element === studentAnswers[index]) {
      finalResult += 1;

    } else if (studentAnswers[index] === 'N.A') {
      finalResult += 0;

    } else if (element !== studentAnswers[index]) {
      finalResult += 0.5;

    } 
  });

  return finalResult;
};

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));