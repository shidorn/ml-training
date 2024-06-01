/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */
function SumOfArrayTS(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var number = arr_1[_i];
        sum += number;
    }
    return sum;
}
console.log(SumOfArrayTS([1, 10, 12]));
