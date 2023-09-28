//so here im going to reversing the array

/*
finding the size of the array and then 
from the front do the reverse tracking 
and from the back do something called the reverse trackiign 
*/

function revArray(start,last,arr){
    //base case 
    if(start>=last){return arr }
    //here we are swapping the variable
    let temp = arr[start];
    arr[start]=arr[last];
    arr[last]=temp;
    console.log(arr[start],arr[last])
    //now firse maine yahan par 
    return revArray(start+1,last-1,arr)
}
//giving some custom inputs today 
let arr=[1,2,3,4,5,6]
let arr2 = revArray(0,arr.length-1,arr);
console.log(arr2)
