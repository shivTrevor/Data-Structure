//here we have to find how many 1 has neighbouring 0 or vice versa

//function check how many zeroes are surroinding that particular one 
function checkerZero(matrix,sum,i,j){
    let row = matrix.length;
    let col = matrix[0].length;
    //check validity now
    if(i+1<row&&matrix[i+1][j]==0){sum++}
    if(i-1>=0&&matrix[i-1][j]==0){sum++}
    if(j+1<col&&matrix[i][j+1]==0){sum++}
    if(j-1>=0&&matrix[i][j-1]==0){sum++}
    return sum;
}

//finding the 
function sumOfZeroes(matrix){
    let sum = 0;
    //create a loop to check the ones one by one 
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
         if(matrix[i][j]==1){
            sum = checkerZero(matrix,sum,i,j)
         }
        }
    }
    return sum;
}

//main 
let matrix = [[1,0,0],[0,1,0],[0,0,1]];
let sum =sumOfZeroes(matrix)
console.log(sum)


/*
Using javascript --> for of and indexof and etc
function sumOfZeroes(matrix) {
    let sum = 0;
    for (const row of matrix) {
        for (const cell of row) {
            if (cell === 1) sum += checkerZero(matrix, matrix.indexOf(row), row.indexOf(cell));
        }
    }
    return sum;
}


*/