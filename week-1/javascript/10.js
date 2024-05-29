/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */

function checkIfNum2isZero(num1, num2 = 0) {
    if(num2 != 0) return "Not Zero"
    throw {ErrorCode : 0 ,Message: "2nd parameter is zero"};
}

console.log(checkIfNum2isZero(1,0));