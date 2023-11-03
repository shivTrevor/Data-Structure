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


// let arr=[1,2,0,4,3,5,0,8,4,3,0,1];
//  moveZeroesToEnd(arr);
// console.log(arr)


//============================================================================================================

//By using space complexity -> O(n) and time complexity -> O(n)

function zeroesToEnd(){
   let result=[];
   let count=0;

  //wherever zeroes comes skip that part  and if not zero push it in result array 
  for(let i=0;i<arr.length;i++){

    if(arr[i]!==0){
      result.push(arr[i]);
    }
    else{
      //count zeroes
      count++;
    }
  }

  //push the remaining elements with zeroes bro 
  for(let i=1;i<=count;i++){
    result.push(0);
  }

  return result ;
   
}

// let arr=[1,2,0,4,3,5,0,8,4,3,0,1];
// let zerosArray = zeroesToEnd(arr)
// console.log(zerosArray)

//=========================================================================================================

//optimised with time - n and space - 1


function moveZeroesToEndOpti(arr) {
  let nonZeroIndex = 0;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
          // Swap non-zero element with the element at nonZeroIndex
          [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
          nonZeroIndex++;
      }
  }

  return arr;
}
