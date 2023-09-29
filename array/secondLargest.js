//here we are finding the second largest element in the array 
//first find the largest number of the array here and then

//Creating a swap method 
    function swap(arr,i,j){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]= temp;
      }

function secondLargestElement(arr){
    //first find the largest element and then find the second one 
    //first finding the largest element and then find 
    let max =arr[0];

    let k=0;
    //find the maximum element 
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){ 
            k=i;
            max=arr[i];
        }
    }

    //swap with the first element 
    swap(arr,0,k);

    //now finding the second element from the remaining array here bro ...
    let max2=arr[1];
    for(let i=2;i<arr.length;i++){
        if(arr[i]>max2)max2=arr[i];
    }
    //returning the second largest element
    return max2;

}

let arr=[3,5,1,8,7,3,4];
let max =secondLargestElement(arr);

console.log(max);