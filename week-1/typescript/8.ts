/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels.
 */

const vowels = (str: string): string => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .split("")
    .filter((char) => vowels.includes(char))
    .join("");
};

console.log(vowels("Hello World!"));
