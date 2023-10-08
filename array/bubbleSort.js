// Bubble Sort Algorithm
//Time complexity =>O(n^2)

function bubbleSort(arr) {
    const n = arr.length;
    
    // Outer loop for the number of passes
    for (let i = 0; i < n-1; i++) {
        // Inner loop for each pass
        // After each pass, the largest element will be at the end
        for (let j = 0; j < n-i-1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

let arr = [5,3,7,9,1];
let a = bubbleSort(arr);
console.log(a);