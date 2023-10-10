// sorting here bro and then do one thing bro 

//first sort each row and then each coloumn
function sortColoumn(matrix,arr,colNum){
    //putting element in couloumn  in main matrix
    for(let i=0;i<arr.length;i++){
       matrix[i][colNum]=arr[i];
    }
  }
  
  function sortRow(matrix,arr,rowNum){
      //putting element in couloumn  in main matrix
      for(let i=0;i<arr.length;i++){
         matrix[rowNum][i]=arr[i];
      }
    }
  //sorting single arrays here 
  function sortMain(matrix){
     let arr=[];
     let col = matrix.length-1;
     let row = matrix[0].length-1;
      
     // first couloumn karo  
     for(let j=0;j<=row;j++){
     for(let i=0;i<=col;i++){
     arr.push(matrix[i][j]);
     }
     arr.sort((a,b)=>a-b);
     //put it in main matrix
     sortColoumn(matrix,arr,j)
     arr=[];
  }
       // row karo 
       for(let i=0;i<=col;i++){ 
       for(let j=0;j<=row;j++){
          arr.push(matrix[j][i]);
          }
          arr.sort((a,b)=>a-b);
          //put it in main matrix
          sortRow(matrix,arr,i)
          arr=[];
       }
     console.log(matrix)
  }
     
  
  
  let matrix =[[1,3,7],[2,4,8],[5,9,6]];
  sortMain(matrix);
  
  /*
   he time complexity of the code is O(n^2 * log(n)), where:
  
  n is the number of rows or columns in the matrix.
  Sorting an array of size n has a time complexity of O(n * log(n)).
  The code involves sorting both rows and columns in the matrix, resulting in a quadratic term of O(n^2) when applied to a square matrix.
  */