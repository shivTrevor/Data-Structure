//so here we are rotating the array by k elements  

/* Algorithm ==>
1> store last element to the temp 
2> traverse from behind and 
3> put n-1 th element to nth element 
*/

function rotateArray(arr){
let temp=arr[0]
for(let i =0;i<arr.length;i++){
  arr[i]=arr[i+1];
}
 arr[arr.length-1]=temp;
 return arr;

}

let arr= rotateArray([1,2,3,4,5]);
console.log(arr)