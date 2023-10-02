//By using the loop for
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let originalString1 = "hello";
let reversedString1 = reverseString(originalString);

console.log(reversedString); // Output: "olleh"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//By using the inbuild methods 
function reverseString(str) {
    return str.split('').reverse().join('');
}

let originalString = "hello";
let reversedString = reverseString(originalString);

console.log(reversedString); // Output: "olleh"
