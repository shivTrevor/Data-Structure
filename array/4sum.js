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

let arr=[1,2,3,4,-2,-5,8];
//so here the test cases is that bro 
let result = FourSumBruteForce(arr,5);
console.log(result)