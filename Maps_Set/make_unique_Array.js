//Here tell minimum number of elements that needs to be removed to make the array unique again 
// that means no duplicate element there

//overall time complexity -> O(n) and space complexity -> O(n) => extra set
// Define a function named 'unique' that takes an array 'arr' as input.
function unique(arr){
    //O(1)
    // Create a new Set to store unique elements.
    let set = new Set();

    //O(n)
    // Iterate through the input array.
    for(let i=0;i<arr.length;i++){
        //O(1)
        // Add each element to the Set.
        set.add(arr[i]);
    }
    
    //Getting the size of the Set: O(1)
    // Calculate the number of elements that need to be removed to make the array unique.
    // The difference between the length of the original array and the size of the Set gives us this count.
    let num = arr.length - set.size;
    
    //O(1)
    // Log the result to the console.
    console.log(num)
}

// Define an input array 'arr'.
let arr=[1,2,3,4,1,2,3,1,1]

// Call the 'unique' function with the input array.
unique(arr);

//============================================================================================================