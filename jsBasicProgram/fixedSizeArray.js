function createFixedArray(size, initialValue) {
    const fixedArray = new Array(size);
    fixedArray.fill(initialValue);
    return fixedArray;
}

const myFixedArray = createFixedArray(5, 0);

console.log(myFixedArray); // Output: [0, 0, 0, 0, 0]

// Trying to push or pop elements will not work because the array size is fixed
myFixedArray.push(1); // Error: myFixedArray.push is not a function
