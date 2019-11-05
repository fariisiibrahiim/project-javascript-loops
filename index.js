const number1 = prompt("input First Number");
const number2 = prompt("input Seconf Number");

const numberOne = JSON.parse(number1);
const numberTwo = JSON.parse(number2);

const resultAddition = numberOne + numberTwo;
const resultSubstraction = numberOne - numberTwo;
const resultMultiplication = numberOne * numberTwo;
const resultDivison = numberOne / numberTwo;

console.log(numberOne + " = first number");
console.log(numberTwo + " = second number");

console.log(resultAddition + " = numberOne + numberTwo");
console.log(resultSubstraction + " = numberOne - numberTwo");
console.log(resultMultiplication + " = numberOne * numberTwo");
console.log(resultDivison + " = numberOne / numberTwo");
