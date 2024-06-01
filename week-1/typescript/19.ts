/**
 * Write a function that merges two arrays into a single array and removes duplicates.
 *
 * Example:
 * - merge([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4]
 * - merge([1, 2, 3], [3, 4, 5]) should return [1, 2, 3, 4, 5]
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

function mergeArray(arr1: number[], arr2: number[]) {
    let arr = [];
    arr = arr1.concat(arr2);
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(mergeArray([1,2,3,4,4,5,234,234,32,],[2,3,4,6,3,23,4,1,8]));