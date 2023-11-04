//longest common sequence 
//un optimized bro 
//time complexity =>O(nlogn) becuase sorting and space complexity => O(1)

function longestCommonSequence(arr){
    //sorting the array 
    arr.sort((a,b)=>a-b);
    //now after sorting my freind 
    // im checking the continues streak bro 
    console.log(arr)
    
    let count=1;   // for checking the streak 
    let maxCount=1; // for checking the maximum streak

    for(let i=1;i<arr.length;i++){
        if(arr[i-1]=== (arr[i]-1)){ //previous element is one smaller then current element bro 
          count++;
          if(maxCount<count){maxCount=count}
        }
        else if((arr[i-1]!== arr[i])){ //checking if both elements are not equal also  ...
          count=1;
        }
    }
    return maxCount;
    
}

let arr=[1,2,0,-8,5,3,4,9,0]
let longest = longestCommonSequence(arr)
console.log(longest)

