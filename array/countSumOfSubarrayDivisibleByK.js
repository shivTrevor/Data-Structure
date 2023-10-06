//here we are counting the sum of subarray that should be divisible by k 

function sumOfsub(arr,k)
{   
    let count=0; // Initialize a count variable to keep track of valid subarrays
    let sum=0;   // Initialize a sum variable to keep track of the current subarray sum

    // Outer loop to select the starting index of subarrays
    for(let i=0;i<arr.length;i++){
        sum=arr[i]; // Initialize sum with the current element

        // Inner loop to form subarrays starting from index i
        for(let j=i;j<arr.length;j++){
            if(sum%k==0){ // If the sum is divisible by k, increment count
                count++;
            }
            sum= sum+arr[j]; // Add the current element to sum
        }
    }

    return count; // Return the total count of valid subarrays
}

let arr=[2,4,5,1,7];
let count = sumOfsub(arr,3); // Call the function with input array and k
console.log(count); // Output the result

// Time Complexity: O(n^2) - The outer loop runs 'n' times, where 'n' is the length of the input array.
//                              The inner loop also runs 'n' times in the worst case.
//                              Overall, the time complexity is O(n^2), where 'n' is the length of the input array.

// Space Complexity: O(1) - No additional data structures are used that grow with the input size.