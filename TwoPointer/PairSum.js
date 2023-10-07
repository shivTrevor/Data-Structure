
//pair sum
function pairSum(arr,sum){
    let store=[];
  let i=0,j=arr.length-1;
  while(i<j){
    if(arr[i]+arr[j]<sum){i++}
    else if(arr[i]+arr[j]>sum){j--}
    else{
          store.push({i,j})
          i++;j--;
    }
  }
  return store;
}
//constraints array is sorted
let arr=[0,1,2,3,4,5,6,7,8,9];
let pair = pairSum(arr,5);
console.log(pair)
