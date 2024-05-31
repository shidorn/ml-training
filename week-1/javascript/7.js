/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

const isInteger = (num) => {
  if (!Number.isInteger(num)) {
    throw new Error(`isInteger(${num}) parameter must be an integer`);
  }

  return Number.isInteger(num);
};

console.log(isInteger(1)); // true
console.log(isInteger(1.1)); // false - error
console.log(isInteger("1")); // false - error
