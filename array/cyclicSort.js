// Function to swap elements at indices i and j in the array
// Time Complexity: O(n)
//space complexity: O(1)

//swapping function
function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Cyclic Sort algorithm
function cyclicSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // If the current element is not in its correct position
        if (arr[i] !== i + 1) {
            // Continue swapping elements until the current element is in its correct position
            while (arr[i] !== i + 1) {
                swap(i, arr[i] - 1, arr);
            }
        }
    }
}

// Example usage:
let arr = [2, 1, 4, 3, 7, 6, 5];
cyclicSort(arr);
console.log(arr);
