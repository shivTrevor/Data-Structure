//under progress
function doubles(arr) {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;
    let second = false, even = false;
  
    while (low < high) {
      mid = Math.floor((low + high) / 2);

      //condition if the single element in extreme left or right 
      if(mid-1===0){return mid}
      if(mid+1===arr.length){return mid}
  
      if (arr[mid - 1] === arr[mid]) { // second occurrence
        second = true;
      } else if (arr[mid] === arr[mid + 1]) {
        second = false;
      } else {
        // this particular element is not repeating its occurrence one time
        return mid;
      }
  
      // finding if it's an even index or an odd index
      if (arr[mid - 1] % 2 == 0) { // it's an even occurrence
        even = true;
      } else {
        even = false;
      }
  
      // checking which side it should take
      if (even) {
        if (second) { // it would go to the right side
          // start with the new element
          low = mid + 1;
        } else { // go to the left side
          // cover the full element
          high = mid - 1;
        }
      } else { // odd
        if (second) { // go to the left side with the mid as the second element
          high = mid;
        } else { // go to the right side with the mid as the first element
          low = mid;
        }
      }
    }
    return -1;
  }
  
  let arr=[1,2,2,3,3,4,4,5,5]
  let result = doubles(arr);
  if (result !== -1) {
    console.log(arr[result]);
  } else {
    console.log("No single element found");
  }
  