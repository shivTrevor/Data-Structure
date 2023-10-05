//so here we will print the matrix in spiral form ...

/*
1> space complexity -> O(n) with one extra array where I will flag it as visited ...
2> Best method -> space complexity => constant and time O(m*n)

==============================================================================================
IMPORTANT NOTE - .includes() js method have time complexity n becuase it uses the linear search 
                  .indexOf()--> use the binary search bro ...

====================================================================================================
some methods includes ==>
1> recursive algorithm => SC=O(N^4) => array for flag -> SC - O(n^2) and  recursive call => O(n^2)
   Here recursive call with the if condition ==>
   Recursive(matrix[i][j]){(j<=0 && !flag[i][j++]){flag.push(matrix[i][j]); recursive(i,j++)}

2> 4 while loops(for inner having 4 different condition like 
    while (j<=0 && !flag[i][j++]){flag.push (matrix[i][j]}  and one more outer while loop => 
    so TC=O(n^2) and space => O(n^2)
    (this will be the worst method )
*/


//best method 
// so here I am not going to blog here bro 
function printSpiral(matrix) {
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Print top row
        for (let i = left; i <= right; i++) {
            console.log(matrix[top][i]);
        }
        top++;

        // Print rightmost column
        for (let i = top; i <= bottom; i++) {
            console.log(matrix[i][right]);
        }
        right--;

        // Print bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                console.log(matrix[bottom][i]);
            }
            bottom--;
        }

        // Print leftmost column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                console.log(matrix[i][left]);
            }
            left++;
        }
    }
}


