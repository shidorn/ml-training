/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */

function getCurrentDate(){
    const today = new Date();
    const YYYY = today.getFullYear();
    let MM = today.getMonth() + 1;
    let DD = today.getDate();
    let HH = today.getHours();
    let mm = today.getMinutes();
    let SS = today.getSeconds();
    return MM +'-'+ DD + '-' + YYYY + ' ' + HH +':'+ mm + ':' + SS;
}

console.log(getCurrentDate());
