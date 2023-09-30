//Here we are finding the first positive integer in the array now how to do it 

/*algorithm ==>>
1> Since there are possiblities of n+1 positive integer is present becuase we have the only till n numbers present
3> Algo => create frequency array and then find the first element in freq array whose value is 0
2> the time complexity is O(n) and space is O(n)
*/

function firstPos(arr){
    let n = arr.length;
    let freq = Array(n+1).fill(0);
    //creating a hash set 
    //cause I dont wanna trace the 0th value my freind 
    freq[0]=0;

    for(let i=0;i<n;i++){  //here we are traversing with the 0 becuase we need the element inside it
        if(arr[i]>0){        // we need only the positive value
            freq[arr[i]]=1;
        }
    }

    //checking the number of the array here 
    for(let i=1;i<=n;i++){
        if(!freq[i]){return i}
    }
    return -1;
}


let arr=[2,3,5,0,1,-8];
let flag = firstPos(arr);
console.log(flag)