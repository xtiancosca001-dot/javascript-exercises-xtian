const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	if(arr.length === 0) return 0;
  return arr.reduce((sum,num) => sum + num);
};

const multiply = function(arr) {
  if(arr.length === 0) return 0;
  return arr.reduce((sum,num) => sum * num);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if(num < 1) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
