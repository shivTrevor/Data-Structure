function printSubset(input, output, index) {
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
  
  printSubset(inputArray, outputArray, startIndex);
  