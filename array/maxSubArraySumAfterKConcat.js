//Maximum Subarray Sum After K concat 
//The time complexity => O(k*n) and Space complexity=>O(1)


function maxSumKConcat(k,arr){

//Apply Kadane algorithm k times
let maxSum=0;
let sum = 0;

while(k!==0){
for(let i=0;i<arr.length;i++){
  sum+= arr[i];
  if(sum>maxSum){maxSum = sum}
  if(sum<0){sum=0}
}
 k--;
}
  return maxSum;
}
//main code
let arr=[1,2,3,-32,9,6,-15,4]
let k=3; //k denote how many times I have to concatenate bro 
let result = maxSumKConcat(k,arr)
console.log(result)