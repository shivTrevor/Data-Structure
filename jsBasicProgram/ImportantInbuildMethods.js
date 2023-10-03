let decimalNumber = parseInt("42", 10); // Parse "42" as base 10
let binaryNumber = parseInt("101010", 2); // Parse "101010" as binary

console.log("Decimal:", decimalNumber); // Output: 42
console.log("Binary:", binaryNumber); // Output: 42

let decimalString = (42).toString(); // Convert 42 to string
let binaryString = (42).toString(2); // Convert 42 to binary string

console.log("Decimal:", decimalString); // Output: "42"
console.log("Binary:", binaryString); // Output: "101010"


let codeOfChar = "A".charCodeAt(0); // Get Unicode code point for character "A"

console.log("Unicode Code Point:", codeOfChar); // Output: 65


let formattedNumber = (3.14159).toFixed(2);
console.log("Formatted Number:", formattedNumber); // Output: "3.14"
