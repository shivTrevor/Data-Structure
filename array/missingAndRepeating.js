//Here only one number is missing and one repeating by mistake find that number
//we make visited number as negative index.... for marking
//Time complexity=>O(n) and space complexity=>O(1)
function findMissingAndRepeating(arr) {
    const n = arr.length;
    let missingNumber, repeatingNumber;

    // Find repeating number
    for (let i = 0; i < n; i++) {

        const absValue = Math.abs(arr[i]);
        if (absValue === n) {
            // Handle the case where missingNumber === arr.length
            arr[0] = -Math.abs(arr[0]);
        } else if (arr[absValue] > 0) {
            arr[absValue] = -arr[absValue];
        } else {
            repeatingNumber = absValue;
        }
    }

    // Find missing number
    for (let i = 1; i < n; i++) {
        //whatever number is not visited remain positive
        if (arr[i] > 0) {
            missingNumber = i;
            break;
        }
    }

    return { missingNumber, repeatingNumber };
}

// Example usage:
const numbersArray = [4, 3, 2, 7, 8, 2, 1, 5];
const result = findMissingAndRepeating(numbersArray);
console.log(result);
