function equiIndex(arr){
    // Initialize two pointers, i and j, at the start and end of the array
    let i = 0;
    let j = arr.length - 1;
 
    // Initialize two sums, s1 and s2, with the first and last elements of the array
    let s1 = arr[i];
    let s2 = arr[j];
 
    // Start an infinite loop to search for equilibrium index
    while(true){
         // If sum on the left side is greater, move the right pointer (j) leftward
         if(s1 > s2) {
             j--;
             s2 += arr[j];
         }
         // If sum on the right side is greater, move the left pointer (i) rightward
         else if(s1 < s2) {
             i++;
             s1 += arr[i];
         }
         // If both sums are equal, move both pointers towards the center
         else {
             i++;
             j--;
             s1 += arr[i];
             s2 += arr[j];
         }
 
         // If the pointers cross or are adjacent, no equilibrium index exists
         if (j <= (i + 1)) {
             return -1;
         }
         // If the pointers are one position apart, the current index (i+1) is the equilibrium index
         else if (j === (i + 2)) {
             return i + 1;
         }
     }
 }
 
 let arr=[1,2,3,4,3,1,2];
 let flag = equiIndex(arr);
 console.log(flag);
 