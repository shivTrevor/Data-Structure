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