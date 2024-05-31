/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

const isEmptyArray = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error("The array is empty");
  }

  return arr.length;
};

isEmptyArray([]);
