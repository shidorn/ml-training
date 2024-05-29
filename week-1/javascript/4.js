/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */

function getCurrentDate(){
    const today = new Date();
    const YYYY = today.getFullYear().toString();
    let MMplus1 = today.getMonth() + 1;
    let MM = MMplus1.toString()
    let DD = today.getDate().toString();
    let HH = today.getHours().toString();
    let mm = today.getMinutes().toString();
    let SS = today.getSeconds().toString();
    return MM +'-'+ DD + '-' + YYYY + ' ' + HH +':'+ mm + ':' + SS;
}

console.log(getCurrentDate());