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

//Exercício 1
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

// Exercício 2
function holidays(string) {
  const btnContainer = document.querySelector('.buttons-container');
  const btnHolidays = document.createElement('button');

  btnHolidays.id = 'btn-holiday';
  btnHolidays.innerText = string;

  btnContainer.appendChild(btnHolidays);

  eventHoliday(btnHolidays);
}

holidays('Feriados');

//Exercício 3
function eventHoliday(button) {

  button.addEventListener('click', function () {
    const daysHoliday = document.querySelectorAll('.holiday');

    for (let i = 0; i < daysHoliday.length; i += 1) {
      if (daysHoliday[i].style.backgroundColor == 'yellow') {
        daysHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        daysHoliday[i].style.backgroundColor = 'yellow';
      }
    }
  });
}

//Exercício 4
function fridays(string) {
  const btnContainer = document.querySelector('.buttons-container');
  const btnFridays = document.createElement('button');

  btnFridays.id = 'btn-friday';
  btnFridays.innerText = string;

  btnContainer.appendChild(btnFridays);

  eventFriday(btnFridays);

}

fridays('Sexta-feira');

//Exercício 5
function eventFriday(button) {

  const fridayDays = [4, 11, 18, 25];

  button.addEventListener('click', function () {
    const daysFridays = document.querySelectorAll('.friday');

    for (let i = 0; i < daysFridays.length; i += 1) {
      if (daysFridays[i].innerText == 'Sextou') {
        daysFridays[i].innerText = fridayDays[i];
      } else {
        daysFridays[i].innerText = 'Sextou';
      }
    }
  });
}

//Exercício 6
function fontMaxDays() {
  const days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '23px';
  });
}

function fontNormalDays() {
  const days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
  });
}

fontMaxDays();
fontNormalDays();

//Exercício 7
function addTask (taskName) {
  const parent = document.querySelector('.my-tasks');
  const task = document.createElement('span');

  task.innerText = taskName;
  parent.appendChild(task);
}

addTask('cozinhar');

//Exercício 8
function colorTask (color) {
  const parent = document.querySelector('.my-tasks');
  const task = document.createElement('div');

  task.style.backgroundColor = color;
  task.className = 'task';
  parent.appendChild(task);
}

colorTask('blue');

//Exercício 9
function taskSelected () {
  const task = document.querySelector('.task');

  task.addEventListener('click', function(event){
    if (event.target.className == 'task selected') {
      event.target.className = 'task'
    } else {
      event.target.className = 'task selected'
    }
  });
}

taskSelected();


//Exercício 10 
function daySelected () {
  let day = document.querySelector('#days');
  let task = document.querySelector('.task');
  let taskSelected = document.getElementsByClassName('task selected');
  let taskColor = task.style.backgroundColor;

  day.addEventListener('click', function(event){
    let eventColor = event.target.style.color;
    if (taskSelected.length > 0 && eventColor != taskColor) {
      let color = taskSelected[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (taskSelected.length != 0 && eventColor == taskColor) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

daySelected();