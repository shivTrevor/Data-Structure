// Block Scoping with let and const
let x = 10;
const y = 20;

// Arrow Functions
const add = (x, y) => x + y;

// Template Literals
const name = "John";
const message = `Hello, ${name}!`;

// Destructuring Assignment
const [a, b] = [1, 2];
const { c, d } = { c: 10, d: 20 };

// Spread and Rest Operators
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }
}

// Modules (not executable in a single program)
// export const PI = 3.14;
// import { PI } from './math';

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = true; // Simulated success
    if (success) {
      resolve('Data received');
    } else {
      reject('Error fetching data');
    }
  });
};

// Default Parameters
const greet = (name = 'Guest') => `Hello, ${name}!`;

// Map, Set, WeakMap, WeakSet (not executable in a single program)
// const myMap = new Map();
// myMap.set('key', 'value');
// const mySet = new Set();
// mySet.add('item');

// Displaying Results
console.log("Block Scoping:", x, y);
console.log("Arrow Function:", add(5, 7));
console.log("Template Literals:", message);
console.log("Destructuring:", a, b, c, d);
console.log("Spread Operator:", newArr);
const person = new Person("Jane Doe", 25);
console.log("Class Method:", person.sayHello());
fetchData().then(data => console.log("Promise Result:", data)).catch(error => console.error(error));
console.log("Default Parameters:", greet());
