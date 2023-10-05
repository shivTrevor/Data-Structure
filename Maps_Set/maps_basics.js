/*
 In JavaScript, a Map is a data structure that allows you to store key-value pairs.
 It maintains the order of elements based on the insertion sequence, providing predictability in iteration.
 Unlike objects, keys in a Map can be of any data type, including objects and functions, allowing for more flexibility.
 Maps are particularly useful when you need to associate specific values with unique keys, providing an efficient way to organize and retrieve data.

 get(key), set(key, value), delete(key), has(key), size, clear() ===>> O(1)
  worst time complexity => O(n)
 */


let myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'One');

console.log(myMap.size); // Output: 2

console.log(myMap.get('name')); // Output: John

console.log(myMap.has('age')); // Output: false

myMap.delete(1);
console.log(myMap.size); // Output: 1


//Traversing the array with using forEach
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// Output:
// name = John

myMap.clear();
console.log(myMap.size); // Output: 0


//Here by using the iterator and .next().value method we can access the values which having in the map
let myMap1 = new Map();
myMap.set(1, 'one');
myMap.set(2, 'two');
let iterator = myMap.values();
console.log(iterator) // output the map values all
let firstValue = iterator.next().value;
console.log(firstValue); // Output: 'one'

