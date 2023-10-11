//traversing all the elements of the matrix by recursion 
//order of execution ==> first 1st row all coloumn element then second row and so on
// traverse -> 00,01,02(print till here),03(change the i), 10,11,12,13 ,20,21,22,23

function traverse(matrix,i,j){
    //if both row and coloumn out of the box 
    if(i>2 ){
        return;
    }
    else{   
    //here directly put 3 ok
    if(j<3){
        console.log(matrix[i][j]);
        //row fix coloumn i am changing 
        return traverse(matrix,i,j+1)}
    else{
        //reinitilise j to zero 
         return traverse(matrix,i+1,0);
    }
}
}

let matrix =[[1,2,3],[4,5,6],[7,8,9]]
traverse(matrix,0,0)