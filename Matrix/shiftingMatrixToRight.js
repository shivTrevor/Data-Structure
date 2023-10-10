//shifting the matrix to the right side with k times .
// first approach time complexity ->O(n*m*k)

// Function to store the last column of the matrix
function firstColomn(matrix){
    let lastcol = matrix.length; 
    let tempMat = [];
  
    // Iterate through each row and push the last element (last column) into tempMat
    for(let i = 0; i < lastcol; i++){
      tempMat.push(matrix[i][lastcol-1]);
    }
  
    return tempMat;
  }
  
  // Function to shift all the elements of all the rows of the particular column
  function firstShift(matrix, k){
    let mat = matrix.map(row => row.slice()); // Create a copy of the matrix
    let col = matrix.length - 1; // Get the number of columns
    let row = matrix[0].length - 1; // Get the number of rows
  
    while(k > 0){
      // Putting the last element to the temp variable
      let temp = firstColomn(mat); // Get the temp variable as the last column of the matrix 
  
      let coltemp = col; // Initialize every time, as the loop runs until the column
  
      // Shifting row elements here 
      while(coltemp >= 0){ 
        // Shifting column elements
        for(let i = 0; i <= row; i++){
          mat[i][coltemp] = mat[i][coltemp - 1];
        }
        // If column is zero then place temp
        if(coltemp == 0){
          for(let i = 0; i <= row; i++)
            mat[i][0] = temp[i];  
        }
        coltemp--; 
      }
      k--; 
  
    }
  
    return mat;
  }
  
  // Define the initial matrix
  let mat = [[1,2,3],[4,5,6],[7,8,9]];
  
  // Rotate the matrix 2 times (as per the function call)
  let shiftedMatrix = firstShift(mat, 2);
  
  