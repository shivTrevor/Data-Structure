/*basics of  set 

A Set is a collection of unique values. It only stores unique elements,
 and if you try to add a duplicate, it won't be added.
1>Time complexity - O(1) -> insertion, deletion ,search => becuase use the hash and here irrespective of length 
   these operation takes place 
  2>space complexity - o(n) ==> there can n elements which we can put in the data structure

3> set is not meant to be accessing the first and last element here we take the arbitrary element ....
   and if wanna access so convert in the array ... let myArray = Array.from(mySet);  (from method is there bro )
*/

// Creating a Set
let mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Adding a duplicate value, but it won't be stored since Sets only store unique values

// Checking if an element is in the Set
console.log(mySet.has(2)); // Output: true

// Getting the size of the Set
console.log(mySet.size); // Output: 3

// Iterating over the Set
for (let item of mySet) {
  console.log(item);
}
// Output:
// 1
// 2
// 3

//by forEach method we can also iterate over there
mySet.forEach(value => {
  console.log(value);
});

// Removing an element from the Set
mySet.delete(2);

// Checking the size again
console.log(mySet.size); // Output: 2

// Clearing the Set
mySet.clear();
console.log(mySet.size); // Output: 0


//Another way of accessing the value of the set by the iterater 
let mySet1 = new Set([3, 1, 4, 1, 5, 9]);

// Using the values() method to get an iterator
let iterator1 = mySet1.values();

// Looping through the set using a for...of loop
for (let value of iterator1) {
  console.log(value);
}


// By using the while loop and next method in set 
let mySet2 = new Set([1, 2, 3, 4, 5]);
let iterator2 = mySet2.values();

let next = iterator2.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
