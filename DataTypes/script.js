let num = 266219;

let numString = String(num);
let numMultiplication = 1;

for (let i = 0; i < numString.length; i++) {
  numMultiplication = numMultiplication * numString[i];
};

let numElevation = numMultiplication ** 3;
let numResult = String(numElevation).substr(0, 2);

console.log(numResult);
