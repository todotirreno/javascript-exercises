const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((sum, elem) => sum + elem, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((result, number) => result * number, 1);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
