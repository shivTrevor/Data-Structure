//finding matrix is symmetric or not 

function symmetric(matrix){
for(let i=0;i<matrix.length;i++){
for(let j=0;j<matrix[0].length;j++){
    if(matrix[i][j]!=matrix[j][i]){return false}
}
}
return true;
}

let matrix = [[1,9,3],[2,5,6],[3,6,7]];
let flag = symmetric(matrix)
console.log(flag)
