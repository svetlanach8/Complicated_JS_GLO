'use strict';

//1

let arr = ["589", "248", "358", "489", "785", "2556", "1456"];
let arrFilter = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].substring(0, 1) === "2" || arr[i].substring(0, 1) === "4") {
    arrFilter.push(arr[i]);
  } else continue;
}

console.log(arrFilter);

//2

for (let i = 1; i <= 100; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (i === j) {
      console.log(`${i}, Делители этого числа: 1 и ${i}`);
    }
  }
}
