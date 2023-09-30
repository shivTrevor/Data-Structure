// This function checks if the elements in the array are non-decreasing
// with at most 'k' increases allowed and 'b' equals allowed.
function nonDecrease(arr, k=0, b=0) {
    for (let i = 0; i < arr.length; i++) {
        // If 'b' and 'k' have been exceeded, it's not non-decreasing.
        if (b >= 1 && k >= 1) {
            return false;
        }

        // If the current element is greater than the next, it's an increase.
        if (arr[i] > arr[i + 1]) {
            k++;
        }
        // If the current element is equal to the next, it's a potential equal element.
        else if (arr[i] == arr[i + 1]) {
            b++;
        }
        // If the current element is less than the next, reset 'b'.
        else {
            if (b) {
                b = 0;
            }
        }
    }
    
    // If the loop completes, the array is non-decreasing within the specified limits.
    return true;
}


//now making the main function here bro 
let arr= [2,1,3,2,4,5,];
let flag = nonDecrease(arr);
console.log(flag)