// Unoptimized solution 
// Time complexity: O(n^2)
// Note: Assumes that the input array is sorted (sorting requires O(NlogN) time complexity)

// Function to check if cows can be placed with a given gap
function accSum(accArr, gap, number) {
    let sum = 0;
    // Count of cows placed
    let count = 1;

    // Iterate through the accumulated array
    for (let i = 0; i < accArr.length - 1; i++) {
        // Accumulate the current gap
        sum = sum + accArr[i];

        // If the accumulated sum is greater than or equal to the gap, place a cow
        if (sum >= gap) {
            count++;
            sum = 0;
        }

        // If the required number of cows is placed, return true
        if (count === number) {
            return true;
        }
    }

    // Unable to place cows with the given gap
    return false;
}

// Main function to find the maximum minimum distance between cows
function AggressiveCow(arr, number) {
    // Create an array to store the gaps between positions
    let accArr = [];
    // Variable to store the total sum of positions
    let sum = 0;
    // Result of whether cows can be placed with a given gap
    let result = false;

    // Populate the array with the gaps between consecutive positions
    for (let i = 0; i < arr.length; i++) {
        accArr.push(arr[i + 1] - arr[i]);
    }

    // Calculate the total sum of positions
    for (let i = 0; i < accArr.length; i++) {
        sum = sum + arr[i];
    }

    // Calculate the average gap needed between cows
    let average = Math.floor(sum / (number - 1));

    // Iterate from the average gap towards 1 to find the maximum minimum gap
    for (let i = average; i >= 1; i--) {
        result = accSum(accArr, i, number);
        // If cows can be placed with the current gap, return the result
        if (result === true) {
            return i;
        }
    }

    // Unable to find a suitable gap
    return -1;
}

// Example usage
let arr = [1, 2, 3, 7, 10, 13, 17, 23];
let result = AggressiveCow(arr, 4);
console.log(result);
