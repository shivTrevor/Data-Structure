// Function to perform bitwise AND
function bitwiseAnd(num1, num2) {
    return num1 & num2;
}

// Function to perform bitwise OR
function bitwiseOr(num1, num2) {
    return num1 | num2;
}

// Function to perform bitwise XOR
function bitwiseXor(num1, num2) {
    return num1 ^ num2;
}

// Function to perform bitwise NOT (complement)
function bitwiseNot(num) {
    return ~num;
}

// Example usage
let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011

console.log("Bitwise AND:", bitwiseAnd(num1, num2)); // Output: 1
console.log("Bitwise OR:", bitwiseOr(num1, num2));   // Output: 7
console.log("Bitwise XOR:", bitwiseXor(num1, num2)); // Output: 6
console.log("Bitwise NOT of num1:", bitwiseNot(num1)); // Output: -6
