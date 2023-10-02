// Concatenation
let str1 = "Hello";
let str2 = " World";
let combined = str1 + str2;

// Substring Extraction
let str3 = "Hello World";
let sub = str3.substring(0, 5);

// Replacing Substrings
let str4 = "Hello World";
let replaced = str4.replace("World", "Universe");

// Converting Case
let str5 = "Hello";
let lower = str5.toLowerCase();
let upper = str5.toUpperCase();

// Splitting and Joining
let str6 = "apple,banana,cherry";
let arr = str6.split(",");
let joined = arr.join(";");

// Trimming
let str7 = "   Hello World   ";
let trimmed = str7.trim();

// Finding Characters
let str8 = "Hello";
let firstChar = str8[0];

// Regular Expressions (Pattern Matching)
let str9 = "Hello123";
let pattern = /\d+/;
let match = str9.match(pattern);

console.log("Concatenation:", combined);
console.log("Substring Extraction:", sub);
console.log("Replacing Substrings:", replaced);
console.log("Converting Case - Lowercase:", lower);
console.log("Converting Case - Uppercase:", upper);
console.log("Splitting and Joining:", joined);
console.log("Trimming:", trimmed);
console.log("Finding Characters - First Character:", firstChar);
console.log("Pattern Matching:", match);
