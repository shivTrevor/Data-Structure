//Catch here => order of the number should be same bro 
//unoptimised algorithm => Time complexity => O(n^2) and space complexity => O(1)

//Shifting all teh elements till the last 
function posToEnd(pos,arr,len){
  //I have to inititalize with the position
  let i=pos;

  //checking whether 0 is started at end or length all is traversed  
  while(arr[i+1]!=0 && i+1<len){
    //shifting.
    arr[i]=arr[i+1];
    i++;
  }
  arr[i]=0;
}

//finding the zeroes in the middle 
function moveZeroesToEnd(arr){
    
    let len = arr.length;
    let j=len-1;

    //traversing from end 
    while(j>=0){
        if(arr[j]==0){
        posToEnd(j,arr,len)
        }
        j--;
    }

}


let arr=[1,2,0,4,3,5,0,8,4,3,0,1];
 moveZeroesToEnd(arr);
console.log(arr)