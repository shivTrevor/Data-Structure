//By using the built in library
// const num1 = BigInt('123456789012345678901234567890');
// const num2 = BigInt('987654321098765432109876543210');

// const product = num1 * num2;

// console.log(product.toString());


//without built in ds


//==================================================================================
//by using the array my freind ....

function multiplyLargeNumbers(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;

    // Initialize an array to store the result
    const result = Array(len1 + len2).fill(0);

    // Iterate through each digit of the first number
    for (let i = len1 - 1; i >= 0; i--) {
        // Convert the current digit to a number
        const x = parseInt(num1[i], 10);

        // Iterate through each digit of the second number
        for (let j = len2 - 1; j >= 0; j--) {
            // Convert the current digit to a number
            const y = parseInt(num2[j], 10);

            // Perform the multiplication and update the result array
            const product = x * y + result[i + j + 1];
            result[i + j + 1] = product % 10;  // Update the current position
            result[i + j] += Math.floor(product / 10);  // Carry over the remainder
        }
    }

    // Convert the result array to a string and remove leading zeros
    const finalResult = result.join('').replace(/^0+/, '');

    return finalResult === '' ? '0' : finalResult;
}

const num1 = "123456789012345678901234567890";
const num2 = "987654321098765432109876543210";

const product = multiplyLargeNumbers(num1, num2);

console.log(product);
