// Function to print the 2x2 sub-square matrix 
function Print(k, l, matrix) {
    // Create an empty array to store the sub-square matrix
    let resultMat = [];

    // Loop to iterate over the sub-square matrix (2x2)
    for (let i = k; i < k + 2; i++) {
        let row = [];
        for (let j = l; j < l + 2; j++) {
            // Push the elements of the sub-square matrix to the row array
            row.push(matrix[i][j]);
        }
        // Push the row array to the resultMat array
        resultMat.push(row);
    }

    // Log the sub-square matrix to the console
    console.log(resultMat);
}

// Function to find and print all 2x2 sub-square matrices in the given matrix
function subSquare(matrix) {
    // Loop to iterate over the rows
    for (let i = 0; i < matrix.length - 1; i++) {
        // Loop to iterate over the columns
        for (let j = 0; j < matrix[0].length - 1; j++) {
            // Call the Print function to print the sub-square matrix
            Print(i, j, matrix);
        }
    }
}

// Example matrix
let matrix = [
    [1, 2, 3],
    [4, 2, 3],
    [1, 4, 1]
];

// Call the subSquare function to find and print all 2x2 sub-square matrices
subSquare(matrix);
