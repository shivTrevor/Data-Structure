// Dutch National Flag Algorithm
// This algorithm efficiently partitions an array with three distinct values (0, 1, and 2) into three sections: 
// "low" (containing 0s), "mid" (containing 1s), and "high" (containing 2s).

function dutch(arr) {
    // Initialize pointers
    let low = 0, mid = 0;
    let high = arr.length;

    while (mid < high) {
        // If current element is 0
        if (arr[mid] == 0) {
            // Swap with element at 'low' position
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            mid++;
            low++;
        } 
        // If current element is 1
        else if (arr[mid] == 1) {
            // Move 'mid' pointer
            mid++;
        } 
        // If current element is 2
        else {
            // Swap with element at 'high' position
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

// Input array
let arr = [1, 0, 0, 2, 1, 0, 1, 1, 2, 2, 0];

// Apply Dutch National Flag Algorithm
let result = dutch(arr);

// Print the sorted array
console.log(result);

// The array 'arr' has been sorted using the Dutch National Flag Algorithm.
