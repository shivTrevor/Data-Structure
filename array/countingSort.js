//counting sort is both  not inplace and not stable 
//time complexity = O(n+k) and space complexity =>O(k)
//in counting sort it is given that we have extra space and range


//k is a range 
function countingsort(arr,k){

    //count array and filling the elements with the zero
    let count = new Array(k+1).fill(0);
 
     for(let i=0;i<arr.length;i++){
        count[arr[i]]=count[arr[i]]+1;
    }

    //By the counting sort what should we do here is that im filling the
    let num=0;
    let j=0;

    //here putting the elements from the counting array to sort the array 
    for(let i=0;i<count.length;i++){
    num = count[i];
    //since while is not looping at all array it only loops in the value of elements inside it 
    while(num!==0){
     arr[j++]=i;
     num--;
    }
    }
   
}

let arr=[4,4,6,1,2,2,7];
countingsort(arr,7)
console.log(arr)