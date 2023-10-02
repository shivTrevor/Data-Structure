// Creating a new Map
let myMap = new Map();

// Setting key-value pairs
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('isStudent', false);

// Getting a value by key
let name = myMap.get('name'); // 'John'

// Checking if a key exists
let hasAge = myMap.has('age'); // true

// Deleting a key-value pair
myMap.delete('isStudent');

// Clearing all key-value pairs
myMap.clear();

// Getting the number of entries (size)
let size = myMap.size; // 0

// Creating a new Map from an array of key-value pairs
let newMap = new Map([
  ['fruit', 'apple'],
  ['color', 'red'],
]);

// Iterating over keys and values
newMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Getting all keys
let keys = Array.from(newMap.keys()); // ['fruit', 'color']

// Getting all values
let values = Array.from(newMap.values()); // ['apple', 'red']

// Converting Map to an array of key-value pairs
let entries = Array.from(newMap.entries()); // [['fruit', 'apple'], ['color', 'red']]

// Checking if the Map is empty
let isEmpty = newMap.size === 0; // false

console.log(`Name: ${name}`);
console.log(`Has Age: ${hasAge}`);
console.log(`Map Size: ${size}`);
console.log(`Is Map Empty: ${isEmpty}`);
