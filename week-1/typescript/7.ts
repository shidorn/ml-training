/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

function checkIfNumberTS(num: number): boolean {
    if(num === num) return true;
    throw {ErrorCode : 0 ,Message: "parameter is not an integer"};
}

console.log(checkIfNumberTS(1));