/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels.
 */
function VowelsInStr(str) {
    let vowels = "";
    for(let i =0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        if("aeiou".includes(letter)){
            vowels += letter;
        }
    }
    return vowels;
}

console.log(VowelsInStr("qwertasdfg"));