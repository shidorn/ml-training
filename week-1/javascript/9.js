/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */

function checkIfPositiveNumber(num) {
    if(num === parseInt(num))if(Math.sign(num) == 1) return true;
    throw "Error: parameter is not an positive integer";
}

console.log(checkIfPositiveNumber(1));