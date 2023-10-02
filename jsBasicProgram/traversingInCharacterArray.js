//Here we are traversing in the character array lets see what happes bro 

//using for in loop
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

for (let char in charArray) {
    console.log(`Index '${char}': ${charArray[char]}`);
}


//============================================================================================================

//using object.keys() for Each
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

let charObject = Object.assign({}, charArray);

Object.keys(charObject).forEach(char => {
    console.log(`Index '${char}': ${charObject[char]}`);
});


//==========================================================================================================

//using while loop with manual conversion
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

let keys = [];
for (let key in charArray) {
    keys.push(key);
}

let i = 0;
while (i < keys.length) {
    let char = keys[i];
    console.log(`Index '${char}': ${charArray[char]}`);
    i++;
}

//=======================================================================================================

//by object .enteries
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

Object.entries(charArray).forEach(([char, value]) => {
    console.log(`Index '${char}': ${value}`);
});


//===================================================================================================

//using for of loop with object .enteries
let charArray = [];
charArray['a'] = 10;
charArray['b'] = 20;
charArray['c'] = 30;

for (let [char, value] of Object.entries(charArray)) {
    console.log(`Index '${char}': ${value}`);
}


