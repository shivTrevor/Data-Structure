// Insertion sort algorithm implementation

// This function takes an array 'arr' as input and sorts it using the Insertion Sort algorithm.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be compared in the variable 'key'.
        let key = arr[i];
        // Initialize a variable 'j' to the index of the element to the left of 'key'.
        let j = i - 1;

        // Move elements of 'arr[0..i-1]', that are greater than 'key', one position ahead of their current position.
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        // Place 'key' at the correct position in the sorted subarray.
        arr[j + 1] = key;
    }

    // Return the sorted array.
    return arr;
}

// Example usage
let unsortedArray = [12, 11, 13, 5, 6];
// Call the insertionSort function with 'unsortedArray' and store the sorted result in 'sortedArray'.
let sortedArray = insertionSort(unsortedArray);

// Print the sorted array to the console.
console.log(sortedArray); // Output: [5, 6, 11, 12, 13]
