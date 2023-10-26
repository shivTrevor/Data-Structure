//By using map data structure having time complexity => O(n) and space O(n)

//new concept -> for...in unstructure like the objects and all 
//for ..of -> structured like objects , array , maps etc

function Nby3(arr){
    //now create a map and set the frequence key value pair here bro 
     let map = new Map();

     //after creating a map put all elements in that
     for(let i=0;i<arr.length;i++){
        //if map has no element then 
        if(!map.has(arr[i])){ map.set(arr[i],1)}
       else{
        //if map has some count frequency 
        map.set(arr[i],map.get(arr[i])+1)
     }
}

let third = Math.floor(arr.length/3)
let result = []
//by using for ...of loop we iterate over the elements of the map bro 
for (let [key,value] of map) {
    if(value>third){result.push(key)}}
    
    if(result.length!==0) return result;
    else return -1;
}

// let arr=[1,2,3,1,2,1,1,2,2,1]
// let maj = Nby3(arr);
// console.log(maj)


//===========================================================================================================

//by using boyer moore voting algo bro 

// Function to find elements occurring more than one third of the time in the array
function boyerMoore(arr) {
  // Initialize result array
  let result = [];
  // Calculate one third of the array length
  let oneThird = Math.floor(arr.length / 3);

  // Variables for Boyer-Moore algorithm
  let c = 0; // Counter for majority element occurrences
  let count = 1; // Counter for Boyer-Moore algorithm
  let maj = arr[0]; // Candidate for majority element

  // First iteration finding first majority element
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] == maj) count++;
      else {
          count--;
          if (count === 0) {
              maj = arr[i];
              count = 1;
          }
      }
  }

  // Count occurrences of first majority element
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === maj) { c++; }
  }

  // If occurrences exceed one third, add it to the result
  if (c > oneThird) {
      result.push(maj);
  }

  // Calculate remaining elements and threshold
  let total = arr.length;
  let rem = total - c;

  // Check if remaining elements are greater than one third
  if (rem > oneThird) {
      // Find second majority element by ignoring the first one
      let maj2 = 0;
      let index = 0;

      // Find the first non-majority element
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== maj) {
              maj2 = arr[i];
              count = 1;
              index = i;
              break;
          }
      }

      // Use Boyer-Moore algorithm again to find second majority element
      for (let i = index; i < arr.length; i++) {
          if (arr[i] !== maj) {
              if (arr[i] == maj2) count++;
              else {
                  count--;
                  if (count === 0) {
                      maj2 = arr[i];
                      count = 1;
                  }
              }
          }
      }

      // Count occurrences of the second majority element
      c = 0;
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === maj2) { c++; }
      }

      // If occurrences exceed one third, add it to the result
      if (c > oneThird) {
          result.push(maj2);
      }
  }

  return result;
}

let arr = [1, 7, 2, 3, 7, 7, 1, 1, 1, 7, 1, 7];
let result = boyerMoore(arr);

console.log(result);
