//so here array sorted or not bro 
//here two return statement 

function  arr_sorted_or_not(arr,index){
    //if not false 
   if(index>arr.length){
    return true ;
   }
   
   //if not equal then return false 
   if(arr[index-1]> arr[index]){
    return false;
   }
   else{
    //if true return 
    return arr_sorted_or_not(arr,index+1);
   }

}

arr1=[1,2,3,4,5,6]
arr2=[2,5,7,1,3,9]

//First array which is sorted
let result = arr_sorted_or_not(arr1,1);
console.log(result)

// Second array which is not sorted
console.log(arr_sorted_or_not(arr2,1))
