function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

function decimalToBinary(decimal) {
    return decimal.toString(2);
}

let binary1 = "1010101";
let binary2 = "011101";

let decimal1 = binaryToDecimal(binary1);
let decimal2 = binaryToDecimal(binary2);

let differenceDecimal = decimal1 - decimal2;
let differenceBinary = decimalToBinary(differenceDecimal);

console.log("Binary Difference:", differenceBinary);
