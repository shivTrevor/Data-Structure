//contains the input having the maximum water here

//Optimal approach time complexity -O(n)
/*
two pointer
1> Calculate the area between them (min(height[left], height[right]) * (right - left)).
2> Move the pointer with the smaller height inwards.
3> Becuase for maximizing of the area, you need to have a taller height and a wider base.
*/

function optimalMax(arr)
{  //so here finding one more thing here bro 
    let sum=0,prevSum=0;
   let i=0,j=arr.length-1;
   while(i<j){
        sum = Math.min(arr[i],arr[j])*(j-i);
        if(sum>prevSum){prevSum=sum}
        if(arr[i]>arr[j]){j--}
        else i++;
   }
    return prevSum;
}

//Bigger method 
//with time complexity -O(n^2)
function max(arr){
    let prevSum=0;
    let sum=0;
    
    for(let i=0;i<arr.length-1;i++){
     for(let j=i+1;j<arr.length;j++){
        sum = Math.min(arr[i],arr[j])*(j-i);
        if(sum>prevSum){prevSum=sum}
     }
    }
    return prevSum;
}

let arr=[1,2,3,4,5]
//by optimal method
let result =optimalMax(arr)
console.log(result)