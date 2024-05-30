/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

function arrNumber(arr) {
    if(arr.length == 0) throw {ErrorCode : 0 ,Message: "Array is empty"};
    return arr;
}

console.log(arrNumber([]));