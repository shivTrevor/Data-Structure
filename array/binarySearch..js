function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;  // Target found, return index
        } else if (arr[mid] < target) {
            low = mid + 1;  // Target is in the right half
        } else {
            high = mid - 1;  // Target is in the left half
        }
    }

    return -1; 
}

sorted_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target_value = 7

result = binarySearch(sorted_array, target_value)

console.log(result)

