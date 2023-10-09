function findMajorityElement(arr) {
    // Step 1: Initialize variables
    let maj = arr[0]; // Initialize maj as the first element
    let count = 1;   // Initialize count as 1 (since the first element is seen once)

    // Step 2: Find the potential majority element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === maj) {
            count++;  // If current element matches maj, increment count
        } else {
            count--;  // If not, decrement count
            if (count === 0) {
                maj = arr[i]; // If count reaches zero, update maj to current element
                count = 1;    // Reset count to 1
            }
        }
    }

    // Step 3: Validate if maj is indeed the majority element
    count = 0; // Reset count to 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maj) {
            count++;  // Count occurrences of maj
        }
    }

    // Step 4: Check if maj appears more than n/2 times
    if (count > Math.floor(arr.length / 2)) {
        return maj; // Return maj as the majority element
    } else {
        return -1; // No majority element found
    }
}

// Example usage:
let arr = [2, 2, 2, 3, 4, 2, 2, 2, 1];
let result = findMajorityElement(arr);
console.log(result); // Output: 2
