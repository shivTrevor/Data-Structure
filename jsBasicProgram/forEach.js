// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Define a function to be applied to each element
function doubleAndLog(num) {
  const doubled = num * 2;
  console.log(`Double of ${num} is ${doubled}`);
}

// Use forEach to apply the function to each element
numbers.forEach(doubleAndLog);

/*
Output:
Double of 1 is 2
Double of 2 is 4
Double of 3 is 6
Double of 4 is 8
Double of 5 is 10
*/

//==============================================================================
//without using forEach
const number = [1, 2, 3, 4, 5];

function doubleAndLog(num) {
  const doubled = num * 2;
  console.log(`Double of ${num} is ${doubled}`);
}

for (let i = 0; i < number.length; i++) {
  doubleAndLog(number[i]);
}