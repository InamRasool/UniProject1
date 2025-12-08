const prompt = require('prompt-sync')();
const num1 = parseInt(prompt('Please Enter the first number of your choice. '));
const num2 = parseInt(prompt('Please Enter the second number of your choice. '));
console.log(`First Number: ${num1}, Second Number: ${num2}`);
console.log('Addition: ', num1 + num2);
console.log('Subraction: ', num1 - num2);
console.log('Multiplication: ', num1 * num2);
console.log('Division: ', num1 / num2);
console.log('End of Program.');