/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */

const checkPositive = (num: number): number => {
  if (num < 0) {
    throw new Error("Number must be positive");
  }

  return num;
};

console.log(checkPositive(0));
console.log(checkPositive(1));
console.log(checkPositive(-1));
