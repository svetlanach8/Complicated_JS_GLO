'use strict';

//1 задание

let lang = "en";
let weekRu = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let weekEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//через if

if (lang === "ru") {
  console.log(weekRu);
} else if (lang === "en") {
  console.log(weekEn);
}

//через switch

switch (lang) {
  case "ru":
    console.log(weekRu);
    break;
  case "en":
    console.log(weekEn);
    break;
}

//Через многомерный массив

let week = {
  "ru": ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
  "en": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};

console.log(week[lang]);

//2 задание

let namePerson = prompt("Введите имя");
let registerNamePerson = namePerson[0].toUpperCase() + namePerson.substring(1).toLowerCase();

let result = (registerNamePerson === "Артем") ? console.log("директор") : 
(registerNamePerson === "Александр") ? console.log("преподаватель") : 
console.log("студент");
