function moveNegativesToFront(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        //if both are negative only left incremented
        if (arr[left] < 0 && arr[right] < 0) {
            left++;
            //if left are positive and right is negative then swap
        } else if (arr[left] > 0 && arr[right] < 0) {
            // Swap arr[left] and arr[right]
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
            //if both are positve then only right decrement
        } else if (arr[left] > 0 && arr[right] > 0) {
            right--;
            //if left is negative and right is positive then no need of swapping just increment counter 
        } else {
            left++;
            right--;
        }
    }

    return arr;
}

let arr = [-1, 3, -5, 6, 3, 6, -8, -9];
let result = moveNegativesToFront(arr);
console.log(result);
