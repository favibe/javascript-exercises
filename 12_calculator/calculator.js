const sum = function (numbers) {
  let total = 0;
  for(let i =0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
};

const subtract = function(a, b) {
	return a - b;
};

const add = function(a, b) {
	return a + b;
};

const multiply = function(num) {
   let product = 1;
  for(let i =0; i < num.length; i++) {
    product = product * num[i];
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	let num = 1;
for (let i = 1; i <= n; i++) {
  num *= i;
}
return num;

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
