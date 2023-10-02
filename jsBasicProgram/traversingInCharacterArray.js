//the most basic and the best way but for here it should be sort ....
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

let j = 'a'.charCodeAt(0); // Get the ASCII value of 'a'
const end = 'c'.charCodeAt(0); // Get the ASCII value of 'c'

while (i <= end) {
    let char = String.fromCharCode(j); // Convert ASCII value back to character
    console.log(`Index '${char}': ${charArray[char]}`);
    i++;
}

//========================================================================================

//Here we are traversing in the character array lets see what happes bro 

//using for in loop
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

for (let char in charArray) {
    console.log(`Index '${char}': ${charArray[char]}`);
}


