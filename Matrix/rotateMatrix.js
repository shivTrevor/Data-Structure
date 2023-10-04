//Here we are rotating matrix with the 90 degree 

function rotate(matrix){
    let rotate=[];
    let len = matrix.length;

//filling element in 3 by 3 matrix
// Create rows
for (let i = 0; i < 3; i++) {
    let row = [];   
    // Fill each row with zeros
    for (let j = 0; j < 3; j++) {
        row.push(0);
    } 
    rotate.push(row);
}

//Putting the element in the rotate array from matrix
    for(let i=0;i<len;i++)
    {
        for(let j=0;j<len;j++){
            rotate[i][j]=matrix[j][len-1-i]
        }
    }
    console.log(rotate)
}

let matrix=[[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix)