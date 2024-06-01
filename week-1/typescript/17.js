"use strict";
/**
 * Write a function that takes a password input and validates it based on the following rules:
 * - The password must be at least 8 characters long.
 * - The password must contain at least one uppercase letter.
 * - The password must contain at least one lowercase letter.
 * - The password must contain at least one number.
 * - The password must contain at least one special character.
 *
 * It must return a message whether the password is valid or not.
 *
 * Example:
 * - if less than 8 characters, return "Password must be at least 8 characters long"
 * - if no uppercase letter, return "Password must contain at least one uppercase letter"
 * - if no lowercase letter, return "Password must contain at least one lowercase letter"
 * - if no number, return "Password must contain at least one number"
 * - if no special character, return "Password must contain at least one special character"
 * - if all rules are met, return "Password is valid"
 *
 * @param {string} password
 * @returns {string}
 */
let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,}$/;
let noUppercasePattern = /^[^A-Z]*$/;
let noLowercasePattern = /^[^a-z]*$/;
let noNumberPattern = /^[^0-9]*$/;
let noSpecCharPattern = /^[^!@#$%^&*()\-_=+[\]{};:'",.<>/?`~\\|]*$/;
function ValidatePassword(password) {
    let str = "";
    if (password.length < 8) {
        return str = "Password must be at least 8 characters long.";
    }
    if (noUppercasePattern.test(password)) {
        return str = "Password must contain at least one uppercase letter";
    }
    if (noLowercasePattern.test(password)) {
        return str = "Password must contain at least one lowercase letter";
    }
    if (noNumberPattern.test(password)) {
        return str = "Password must contain at least one number";
    }
    if (noSpecCharPattern.test(password)) {
        return str = "Password must contain at least one special character";
    }
    return str = "Password is valid";
}
console.log(ValidatePassword("Pass@1sdsadsad"));
