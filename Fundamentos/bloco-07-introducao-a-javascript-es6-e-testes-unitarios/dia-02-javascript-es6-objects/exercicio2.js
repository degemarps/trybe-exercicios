const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function modifyLesson(object, key, value) {
  object[key] = value;
}

function listKeys(object) {
  return Object.keys(object);
}

function listValues(object) {
  return Object.values(object);
}

function objectLength(object) {
  return Object.keys(object).length;
}

modifyLesson(lesson2, 'turno', 'noite');

console.log(listKeys(lesson1));

console.log(listValues(lesson2));

console.log(objectLength(lesson3));

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

console.log(allLessons);

function contStudents(object) {

  let sum = 0;

  for (key in object) {
    sum += object[key]['numeroEstudantes'];
  }

  return sum;
}

console.log(`Número total de estudantes: ${contStudents(allLessons)}`);

function getValueByNumber(object, position) {

  let cont = 0;

  for (key in object) {
    if (cont === position) { return object[key] } else { cont += 1 }
  }
}

console.log(getValueByNumber(lesson1, 2));

function verifyPair(object, key, value) {

  if (object[key] === value) { return true } else { return false }
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));