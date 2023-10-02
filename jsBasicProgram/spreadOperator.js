//better way of doing object.assign

// Copying Arrays
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // Output: [1, 2, 3]

// Concatenating Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Passing Arguments to Functions
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); // Output: 6

// Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
