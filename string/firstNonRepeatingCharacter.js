//so here we are finding the first non repeating character in the string without the need of the extra space an
// and data structure like map and all


// Function to find the first non-repeating character in a string without using additional data structures
function nonRepeatingDS(str) {
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Compare the current character with all characters after it
        for (let j = i; j < str.length; j++) {
            if (str[i] === str[j] && i !== j) {
                return str[i]; // Return the first repeating character
            }
        }
    }
    return false; // Return false if no repeating character found
}

let str = "shivnnivhabcd";
let flag = nonRepeatingDS(str);
console.log(flag);


/*
The time complexity of this algorithm is O(n^2), where "n" is the length of the input string str. 
This is because there are nested loops iterating over the characters.
*/