/**
 * Write a function to check if a number is even or odd.
 * @param {number} num The number to check.
 * @return {boolean} True if the number is even, false if it is odd.
 */

const isEven = (num: number) => num % 2 === 0;

console.log(isEven(2)); // true
console.log(isEven(3)); // false
