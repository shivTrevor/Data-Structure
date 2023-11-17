// search the key in rotating element

function search(arr, element) {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        // If the middle element is the target, return its index
        if (arr[mid] === element) {
            return mid;
        }

        // Check if the left half is sorted
        if (arr[low] <= arr[mid]) {
            // Check if the target is in the sorted left half
            if (arr[low] <= element && element <= arr[mid]) {
                high = mid - 1;
            } else {
                // Target is in the unsorted right half
                low = mid + 1;
            }
        } else {
            // Right half is sorted

            // Check if the target is in the sorted right half
            if (arr[mid] <= element && element <= arr[high]) {
                low = mid + 1;
            } else {
                // Target is in the unsorted left half
                high = mid - 1;
            }
        }
    }

    // If the target is not found, return -1
    return -1;
}

// Sorted rotated array
let arr = [6, 7, 8, 9, 1, 2, 3, 4, 5, 6];
let result = search(arr, 8);
console.log(result);
