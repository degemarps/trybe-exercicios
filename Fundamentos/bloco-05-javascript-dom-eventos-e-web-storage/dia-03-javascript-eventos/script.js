function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listDays = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const days = dezDaysList[i];
    const listItem = document.createElement('li');
    listItem.innerText = days;

    if ((i - 1) == 24 || (i - 1) == 25 || (i - 1) == 31) {
      if ((i - 1 == 25)) {
        listItem.className = 'day holiday friday';
      } else {
        listItem.className = 'day holiday';
      }

    } else if ((i - 1) == 4 || (i - 1) == 11 || (i - 1) == 18) {
      listItem.className = 'day friday';

    } else {
      listItem.className = 'day';
    }

    listDays.appendChild(listItem);
  }
}

createDays();