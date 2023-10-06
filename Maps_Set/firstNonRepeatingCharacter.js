// Function to find the first non-repeating character in a string
function nonRepeat(arr){
    // Create a map data structure to store character frequencies
    let map = new Map();
  
    // Iterate through the input array to count character occurrences
    for(let i=0; i<arr.length; i++){
      // If character is not in the map, initialize its count to 1
      if(!map.get(arr[i])){
        map.set(arr[i], 1);
      } else {
        // If character is already in the map, increment its count
        map.set(arr[i], map.get(arr[i]) + 1);
      }
    }
  
    // Iterate through the input array again to find the first non-repeating character
    for(let i=0; i<arr.length; i++){
      // If character count is 1, it's the first non-repeating character
      if(map.get(arr[i]) === 1){
        return arr[i];
      }
    }
  
    // If no non-repeating character is found, return false
    return false;
  }
  
  // Input string
  let arr = "shivhinab";
  
  // Call the function and store the result
  let flag = nonRepeat(arr);
  
  // Print the result
  console.log(flag);
  
  // Time Complexity Analysis:
  // Setting Map: O(n) - Iterate through the input array once
  // Finding Non-Repeating Character: O(n) - Iterate through the input array again
  // Overall Time Complexity: O(n) + O(n) = O(n)
  
  // Space Complexity Analysis:
  // Map Size: O(k), where "k" is the number of unique characters in the input string
  