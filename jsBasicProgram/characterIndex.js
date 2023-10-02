//here creating a character array where the value index is treated as a particular character like a ,b,c,d

let str = "hello";
let charArray = [];

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!charArray[char]) {
        charArray[char] = 1;
    } else {
        charArray[char]++;
    }
}

console.log(charArray);

