/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */

const celsiusToFahrenheit = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};

let celcius = 60;
console.log(`${celcius}°C = ${celsiusToFahrenheit(celcius)}°F`);
