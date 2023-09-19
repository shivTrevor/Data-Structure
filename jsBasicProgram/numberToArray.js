/*
  here first converting the javascript number into the array 
*/

function numberToArray(number) {
    // Convert the number to a string
    const numberString = number.toString();

    // Split the string into an array of characters
    const charArray = numberString.split('');

    // Use Array.prototype.map to convert each character back to a number
    const numberArray = charArray.map(char => parseInt(char, 10));

    return numberArray;
}

// Example Usage:
const myNumber = 12345;
const resultArray = numberToArray(myNumber);

console.log(resultArray); // Output: [1, 2, 3, 4, 5]
