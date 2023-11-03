//Sum of circular subarray 
// time complexity => O(n) and space compleixty => O(1)

function sumofCircular(arr) {
    // Initialize variables for tracking maximum sums
    let firstSum = 0; // Initialize firstSum to 0
    let maxSum = 0;   // Initialize maxSum to 0
    let sum = 0;      // Initialize sum to 0
    let totalSum = 0; // Initialize totalSum to 0

    // Iterate through the elements of the array
    for (let i = 0; i < arr.length; i++) {
        // Calculate the cumulative sum of the array elements
        sum = sum + arr[i];

        // Update maxSum if the current sum is greater
        if (maxSum < sum) {
            maxSum = sum;
        }

        // Reset sum to 0 if it becomes negative
        if (sum < 0) {
            sum = 0;

            // Store maxSum as firstSum if it's the first reset
            if (!firstSum) {
                firstSum = maxSum;
            }
        }

        // Check if it's the last element and sum is non-zero
        if (!arr[i + 1] && sum) {
            // Calculate the total sum considering circularity
            totalSum = sum + firstSum;

            // Update maxSum if totalSum is greater
            if (totalSum > maxSum) {
                maxSum = totalSum;
            }
        }
    }

    // Return the maximum circular subarray sum
    return maxSum;
}

let arr = [1, 2, -4, 5, 4, 6, -20, 3, 4, -9, 5, 2];
let maxSum = sumofCircular(arr);
console.log(maxSum);
