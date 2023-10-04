/*
Here we are setting from zeroes of matrix to entire row and coloumn to zero in the matrix ...
There are method ==> with the space complexity o(n) since we need extra array of recursive call
 1>where I can use flag array and then push the row and coloumn pla
 2> from recursive algorithm also => space complexity is O(n)
 3> space complexity 1 and time complexity => O(n^4) if we run function under loop having loop so total loop will be 4
*/


//Here this solution will be given here bro => where the time complexity is 0(n^2) and linear space complexity
function setZeroes(matrix) {
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // Step 1: Scan for all zeroes and update flags as its corresponding first row element and first coloumn element
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) firstRowHasZero = true;
                if (j === 0) firstColHasZero = true;
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Update rows and columns leaving the first row and first coloumn 
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    //  Update first row and first column if first row/coloumn has zero 
    if (firstRowHasZero) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }

    if (firstColHasZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
}
