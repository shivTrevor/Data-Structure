//doing 4 sum with the brute force method here bro 

//we have to only reaturn the yes or no not anything else bro 
//time complexity =>O(n^4) and space complexity =>O(1)
function FourSumBruteForce(arr,target){
    let len = arr.length;

    for(let i=0;i<len-3;i++){
      for(let j=0;j<len-2;j++){
        for(let k=0;k<len-1;k++){
            for(let l=0;l<len;l++){
             if(target === arr[i]+arr[j]+arr[k]+arr[l]){
                return true ;
             }
            }
        }
      }

    }
    
    return false;
}

// let arr=[1,2,3,4,-2,-5,8];
// //so here the test cases is that bro 
// let result = FourSumBruteForce(arr,5);
// console.log(result)


//====================================================================================================
//4 sum optimised version here bro 
//sum - (numbers on two index ) == numbers on two index .....
//time complexity =>O(n^3)

function optimised4Sum(arr, target) {
    let len = arr.length;
    let k = 0, l = 0;
    let reqSum = 0, innerSum = 0;

    // Sort the array to enable two-pointer approach
    arr.sort((a, b) => a - b);

    for (let i = 0; i < len - 3; i++) {
        for (let j = i + 1; j < len - 2; j++) {  // Start j from i+1 to avoid duplicate quadruplets
            k = j + 1;
            l = len - 1;
            reqSum = target - (arr[i] + arr[j]);

            while (k < l) {
                innerSum = arr[k] + arr[l];

                if (innerSum > reqSum) {
                    l--;
                } else if (innerSum < reqSum) {
                    k++;
                } else {
                    // Found a quadruplet
                    return true;
                }
            }
        }
    }

    // No quadruplet found
    return false;
}


 let arr=[1,2,3,4,-2,-5,8];
 //so here the test cases is that bro 
let result = optimised4Sum(arr,50);
console.log(result)