/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */

function FahrenheitToCeliusConverterTS(fahrenheit: number) : number {
    let celsius = (fahrenheit -32) * 5/9;
    return celsius;
}
console.log(FahrenheitToCeliusConverterTS(140));