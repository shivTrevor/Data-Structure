// Merging Objects
let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };
let merged = Object.assign({}, target, source);

// Cloning an Object
let original = { x: 10, y: 20 };
let clone = Object.assign({}, original);


console.log("Merged Object:", merged);
console.log("Cloned Object:", clone);


///////////////////////////////////////////////////////////////////////////////////////////

//without object.assign() Merging the object 
function mergeObjects(obj1, obj2) {
    let merged = {};

    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            merged[key] = obj1[key];
        }
    }

    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            merged[key] = obj2[key];
        }
    }

    return merged;
}

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let merge = mergeObjects(obj1, obj2);
console.log(merge); // Output: { a: 1, b: 3, c: 4 }
