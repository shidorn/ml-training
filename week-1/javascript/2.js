/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

console.log(sum([1, 2, 3, 4, 5]));
