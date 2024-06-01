/**
 * Write a function to check if a number is even or odd.
 * @param {number} num The number to check.
 * @return {boolean} True if the number is even, false if it is odd.
 */

function EvenOddIdentifier(num: number): boolean {
    if(num % 2 == 0){
        return true;
    }
    return false;
}
console.log(EvenOddIdentifier(5));