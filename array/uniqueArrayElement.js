//Here by the use of inplace sorting algorithm like => quick sort 
//by default js sort method use the quicksort...
//Inplace algo => the algo which dont require extra space like set for the sorting ....sorting done on same array 
//Time complexity => O(nlogn) ,,,, space complexity => O(1)



function unique(arr){

    //first sort the array (by default uses quick sort)
    arr.sort((a,b) =>a-b);
    console.log(arr)
    let pair=0;

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==arr[i+1]){
         pair++;
        }
    }
    return pair;
}

let arr=[1,7,2,3,4,4,3,5,7,2,7,7,7];
let result = unique(arr);
console.log(result)

