/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT
const entities: {[key: string]: string} = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": "\"",
  "&apos;": "'",
};

function convertHTMLEntities(str: string): string {
  for (const entity in entities) {
    if (Object.prototype.hasOwnProperty.call(entities, entity)) {
      const regex = new RegExp(entity, 'g');
      str = str.replace(regex, entities[entity]);
    }
  }
  return str;
}

console.log(convertHTMLEntities("Dolce &amp; Gabbana &lt;3 &apos; Louis Vuitton &amp; Christian Dior"));