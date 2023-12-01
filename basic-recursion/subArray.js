//This method backtracking or worst method 
//By using recursion and memoization
//space complexity => O(n2) becuase of memoization 
//time complexity => O(2^n) becuase stack space and for loop 

var memo=[];

function subsequence(arr,i,j,){
    if(j>=arr.length) return ;
    if(memo[`${i}-${j}`]){return }

     let temp=[]
    for(let k=i;k<=j;k++){
        temp.push(arr[k])
    }
    console.log(temp)

    memo[`${i}-${j}`]=true;

    //MORE RECURSIVE CALL KARNA HAI BRO       
      //checking left side bro 
        subsequence(arr,i,j+1,memo)

        //checking right side bro 
        subsequence(arr,i+1,j+1,memo)


    return ;
}

let arr=[1,2,3,4];
subsequence(arr,0,0)


/* Understanding Space Complexity in Recursive Functions

In recursive functions, two important factors contribute to space complexity: the call stack and any additional data structures used within the function.

1. **Call Stack:**
   - The call stack is a region of memory where function calls and local variables are 
   stored. Each recursive call adds a new frame to the call stack, and when a function
    completes, its frame is removed. The space required by the call stack is 
    proportional to the maximum depth of the recursion.

2. **Temporary Array (`temp`):**
   - The temporary array, often created within the local scope of the function, 
   is not stored on the call stack. Instead, it is allocated and deallocated within the
    local memory of each function call. In recursive functions, each recursive call has 
    its own copy of the temporary array, and these arrays are not accumulated on the 
    call stack.

**Conclusion:**
   - While the call stack contributes to space complexity, it is distinct from other 
   data structures used within the function. In cases like the creation of a temporary 
   array, the memory is managed within the local scope of each function call and does 
   not accumulate on the call stack. The dominant factor in space complexity is often 
   determined by other data structures, such as memoization arrays, which can result in 
   a more accurate analysis of space complexity.

   */