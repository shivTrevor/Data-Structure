// Having said that bro ...
//By using an extra space ...
//In backtracking we will have two loops ....O(n^2)

function shiftRight(arr, n) {
    const length = arr.length;
    n = n % length; // Ensure n is within the length of the array

    const shiftedArr = new Array(length);

    for (let i = 0; i < length; i++) {
        shiftedArr[(i + n) % length] = arr[i];
    }

    return shiftedArr;
}

// Example Usage
const arr = [1, 2, 3, 4, 5];
const n = 2;
const result = shiftRight(arr, n);
console.log(result);

//=========================================================================================
//here first single array element rotating to the right for n times 

//Doing for the first time here bro 
function rotate(arr){
    let k=3;
    let len = arr.length;
  //here we are rotating the array

//now right now its a brute force method
while(k>0){
   //I have to decide the temp everytime
    let temp = arr[len-1];
  for(let i=len-1;i>=0;i--){
    //last element for temp i think everytime
    arr[i]=arr[i-1];
}   
    //arr [4+1%4]  [size+k%size]
    arr[0]=temp
    k--;
}    
    console.log(arr)
    return true
}


let arr1=[1,2,3,4,5,6];
let result1 = rotate(arr1);
console.log(result)





