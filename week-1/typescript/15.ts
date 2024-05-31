/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */

const isEvenOrOdd = (n: number): void => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(`${i} is even.`);
    else console.log(`${i} is odd.`);
  }
};

isEvenOrOdd(5);
