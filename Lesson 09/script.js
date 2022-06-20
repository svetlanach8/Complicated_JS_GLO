'use strict';

let editFormat = function (num) {
  if (num < 10) {
    return '0' + num
  } else
    return num
}

let editDeclination = function (num, [value1, value2, value3]) {
  num = num % 100;
  let index = num % 10;
  if (num > 10 && num < 20) {
    return num + ' ' + value3
  } else if (index <= 4 && index >= 2) {
    return num + ' ' + value2
  } else if (index === 1) {
    return num + ' ' + value1
  } else {
    return num + ' ' + value3
  }
}

let createDate = function () {
  let now = new Date();

  const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const monthName = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const blockFirst = document.createElement('div');
  const blockSecond = document.createElement('div');
  document.body.append(blockFirst);
  document.body.append(blockSecond);
  
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  //1 формат

  let monthIndex = now.getMonth();
  let weekDay = now.getDay() - 1;

  let hourContent = editDeclination(hours, ['час', 'часа', 'часов']);
  let minuteContent = editDeclination(minutes, ['минута', 'минуты', 'минут']);
  let secondContent = editDeclination(seconds, ['секунда', 'секунды', 'секунд']);

  blockFirst.textContent = `Сегодня ${week[weekDay]}, ${day} ${monthName[monthIndex]} ${year} года, ${hourContent} ${minuteContent} ${secondContent}`;

  //2 формат

  let date = editFormat(day) + '.' + editFormat(month) + '.' + year;
  let time = editFormat(hours) + ':' + editFormat(minutes) + ':' + editFormat(seconds);

  blockSecond.textContent = date + ' - ' + time;
}

setInterval(function () {
  document.body.innerHTML = '';
  createDate();
}, 1000);
