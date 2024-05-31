/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */

const checkSecondParam = (num1: number, num2: number): string => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("The first/second parameters must be numbers");
  }

  if (num2 === 0) {
    throw new Error("The second parameter cannot be 0");
  }

  return "all numbers are valid";
};

console.log(checkSecondParam(1, 1));
console.log(checkSecondParam(1, 0));
// console.log(checkSecondParam(1, "1"));
