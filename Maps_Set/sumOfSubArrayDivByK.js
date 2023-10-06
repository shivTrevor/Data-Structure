//This approach has a time complexity of O(n) and a space complexity of O(min(n, k)).
//This concept is based on the => if  same remainder again come that means in between k number of count element came...



function countSubarraysDivisibleByK(arr, k) {
    let count = 0; // Initialize a variable to keep track of the count of subarrays.
    let sum = 0; // Initialize a variable to keep track of the cumulative sum.
    let prefixSumCounts = new Map(); // Create a map to store counts of different remainders.
  
    prefixSumCounts.set(0, 1); // Initialize the map with an entry for initial remainder 0.
  
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Update the cumulative sum.
  
        // Calculate the remainder of the cumulative sum divided by k.
        let remainder = sum%k;
  
        // If the map contains an entry with this remainder, increment the count by the stored value.
        if (prefixSumCounts.has(remainder)) {
            count += prefixSumCounts.get(remainder);
        }
  
        // Update the count of occurrences of the current remainder in the map.
        if (prefixSumCounts.has(remainder)) {
            prefixSumCounts.set(remainder, prefixSumCounts.get(remainder) + 1);
        } else {
            prefixSumCounts.set(remainder, 1);
        }
    }
  
    return count; // Return the final count of subarrays whose sum is divisible by k.
  }
  
  let arr = [4, 5, 0, -2, -3, 1];
  let k = 5;
  let result = countSubarraysDivisibleByK(arr, k);
  console.log(result); // Output: 7
  