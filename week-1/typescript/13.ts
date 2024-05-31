/**
 * Write a function that accepts a string and converts the first letter of each word to uppercase.
 * @param {string} str The string to convert.
 * @return {string} The string with the first letter converted to uppercase.
 *
 * Example string: "The quick brown fox jumps over the lazy dog"
 * Expected output: "The Quick Brown Fox Jumps Over The Lazy Dog"
 */

const capitalizeFirstLetter = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(
  capitalizeFirstLetter("The quick brown fox jumps over the lazy dog")
);
