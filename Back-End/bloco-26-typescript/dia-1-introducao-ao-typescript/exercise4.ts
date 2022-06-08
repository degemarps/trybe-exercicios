const readlineSync = require('readline-sync');
const seasons = require('./exercise3');
const months = require('./exercise2');

const month: string = readlineSync.question('Informe o mês: ');
const hemisphere: string = readlineSync.question('Informe o hemisfério: ');

const monthNum: number = months[month]

if (hemisphere === 'norte') {
  if (monthNum >= 9 && monthNum <= 12) {
    console.log(seasons[1]);
  } else if (monthNum >= 1 && monthNum <= 3) {
    console.log(seasons[2]);
  } else if (monthNum >= 3 && monthNum <= 6) {
    console.log(seasons[3]);
  } else if (monthNum >= 6 && monthNum <= 9) {
    console.log(seasons[4]);
  }

} else if (hemisphere === 'sul') {
  if (monthNum >= 3 && monthNum <= 6) {
    console.log(seasons[1]);
  } else if (monthNum >= 6 && monthNum <= 9) {
    console.log(seasons[2]);
  } else if (monthNum >= 9 && monthNum <= 12) {
    console.log(seasons[3]);
  } else if (monthNum >= 1 && monthNum <= 3) {
    console.log(seasons[4]);
  }
};
