/*
Algorithm -->
Find minimum 
traverse with the latest first element 
increase the latest first element here .
*/ 

//Creating a swap method{ 
function swap(arr,i,j){
  let temp = arr[i];
  arr[i]=arr[j];
  arr[j]= temp;
}

//here we are doing the selection sort method
function selectionSort(a){

    for(let i=0;i<a.length;i++){
        let min=i
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[min])
            {min = j}
        }
        //so here we are swapping the elements of the array 
        swap(a,i,min);
    }
    return a;
}

//giving input here and finding the selection sort here 
//so here how to find the first and for
let arr = [5,3,7,9,1];
let a = selectionSort(arr);
console.log(a);

