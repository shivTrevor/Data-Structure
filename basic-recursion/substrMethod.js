//space complexity =>O(n
//Time => 2^n

function powerSet(input, output, index) {
    // If all elements have been traversed
    if (index >= input.length) {
      // Print the output array
      console.log(output);
      return;
    }
  
    // Do not include the current element
    printSubset(input, output, index + 1);
  
    // Include the current element
    output.push(input[index]);
  
    printSubset(input, output, index + 1);
  
    // Backtrack to remove the current element from the output array
    output.pop();
  }
  
  // Example usage:
  const inputArray = [1, 2, 3];
  const outputArray = [];
  const startIndex = 0;
  
  powerSet(inputArray, outputArray, startIndex);


/*
impo note=>
The space complexity is dominated by the call stack, and it grows linearly with the 
size of the input array. The auxiliary space used for the output array is not considered
 because it's part of the desired output and is not an extra space used for computation.



*/
  