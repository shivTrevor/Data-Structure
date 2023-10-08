//solving kadane using two pointer 
//time complexity = O(n), space =O(1)

function kadane(arr){
    let totalSum=0;
    //first find the total sum of the array 
    for(let i=0;i<arr.length;i++){
        totalSum= totalSum + arr[i];
    }
    //defining variables
      let maxsum = 0
      let i=0,j=arr.length-1;
      
      while(i<j){
        //delete small integer one by one and find the total sum  after differencing the smallest element
        totalSum = totalSum - (arr[i]<=arr[j]?arr[i]:arr[j]);
        //self explanatory
        if(totalSum>maxsum){
            maxsum=totalSum;
        }
        //whichever the small integer change it 
        if(arr[i]<=arr[j]){i++}
        else{j--}    
}
       return maxsum
}

let arr=[1,2,-2,-3,4,6,5,0,9,-9];
let max = kadane(arr);
console.log(max)