'use strict';

let getContent = function (value) {
  if (typeof value === 'string') {
    let textCorr = value.trim();
    if (textCorr.length > 30) {
      return textCorr.replace(textCorr.substring(31), '...');
    } else {
      return textCorr;
    }
  } else {
    return 'Вы ввели значение с типом данных не строка'
  }
}

console.log(getContent('   Я ввожу длинный текст   '));
