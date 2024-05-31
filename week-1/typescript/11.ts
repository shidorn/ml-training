/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT
const entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

const convertEntities = (str: string): string => {
  return str.replace(/[&<>"']/g, (char) => {
    return entities[char];
  });
};

console.log(convertEntities("Dolce & Gabbana"));
