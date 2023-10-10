
/*let me build the matrix which put the snake pattern (Zig Zag pattern)
  Input =>  1 2 3      
            4 5 6     
            7 8 9  
  
  Output => 1 2 3 6 5 4 7 8 9 
*/

function printing(matrix){
    let l= matrix.length-1;
    let m = matrix[0].length-1;
    //printing here side to side
    let flag=true;
    for(let j=0;j<=m;j++){
    if(flag){
    for(let i=0;i<=l;i++) {
      console.log(matrix[j][i]);
    }}
    else{
      for(let i=l;i>=0;i--){
         //now here print side by side bro 
        console.log(matrix[j][i]);
    }
}     flag=(!flag);
}}

let matrix=[[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
printing(matrix)