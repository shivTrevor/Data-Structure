// Function to count subarrays with a given sum 
//Using two pointer method 
//time complexity =>O(n) and space=>O(1)


function subArrayEqualSum(arr, reqSum) {
    // Initialize pointers, count, and sum
    let i = 0,
      j = 0,
      count = 0;
    let sum = arr[0];
    let len = arr.length;
  
    // Iterate through the array
    while (j < len) {
      // If current sum is less than required sum, extend the window to the right
      if (sum < reqSum) {
        j++;
        sum += arr[j];
      }
      // If current sum is greater than required sum, shrink the window from the left
      else if (sum > reqSum) {
        sum -= arr[i];
        i++;
      }
      // If current sum is equal to required sum, found a subarray
      else if (sum === reqSum) {
        count++;
        // Move the window by incrementing i and j, and update the sum accordingly
        sum -= arr[i];
        i++;
        j++;
        sum += arr[j];
      }
    }
  
    // Return the count of subarrays
    return count;
  }
  
  // Example usage
  let arr = [3, 1, 2, 2, 3, 4, 2, 1, 4];
  let count = subArrayEqualSum(arr, 7);
  console.log(count);
  