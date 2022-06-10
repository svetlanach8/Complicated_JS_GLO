'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let item in week) {
  let block = document.createElement('div');
  let data = new Date();
  let weekDay = data.getDay() - 1;
  
  if (week[item] === 'Суббота' || week[item] === 'Воскресенье') {
    block.style.fontStyle = 'italic';
  }
  
  if (item == weekDay) {
    block.style.fontWeight = 'bold';
  }
  
  document.body.append(block);
  block.textContent = week[item];
}
