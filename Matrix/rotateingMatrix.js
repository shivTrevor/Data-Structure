//here i am using the modulus operator
//here it is unsolved right now i will get back after some days 

function rotate(matrix,k){
    //here we are using the rotation of matrix
    let len = matrix.length;//coloumns
    rem = len%k;
    let j=len;
    //store the last row in the temp array
    let temp =[];
    //last coloumn all row data is there
    for(let i=0;i<len;i++){
        temp[i][len]=matrix[i][len];
    }

    while(rem!=0){

        for(let i=0;i<matrix[0].length;i++){ //no of rows
            //dont swap that bro 
            matrix[i][j-1]=matrix[i][j];
        }
        j--;
        rem--;
    }
    


}

let matrix =[[1,2,3],[4,5,6][7,8,9]];
let result = rotate(matrix);
console.log(result);
