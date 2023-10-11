// Multiplying two matrix 
// Time complexity =>O(n^3) and space complexity => O(n^2)

// Function to extract the i-th column from matrix m
function First(i, m){
    let len = m.length;
    let arr=[];
    for(let j=0;j<len;j++){
        arr.push(m[i][j]);
    }
    return arr;
}

// Function to extract the j-th column from matrix n
function Second(j, n){
    let len = n[0].length;
    let arr=[];
    for(let i=0;i<len;i++){
        arr.push(n[i][j]);
    }
    return arr;
}

// Function to calculate the dot product of two arrays
function Result(first, second){
    let len= first.length;
    let result=0;

    // Calculate dot product
    for(let i=0;i<len;i++){
        result = result + first[i] * second[i];
    }
    return result;
}

// Function to perform matrix multiplication of square matrices m and n
function MatMulti(m, n){
    let Mul = [];
    let len = m.length;

    // Initialize result matrix with zeros
    Mul = Array.from({ length: len }, () => Array(len).fill(0));
    let first=0,second=0;

    // Loop through rows of m and columns of n to calculate elements of Mul
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){

            // Extract i-th row of m and j-th column of n
            first = First(i, m);
            second= Second(j, n); 

            // Calculate element of result matrix and assign it
            Mul[i][j]= Result(first, second);
        }
    }
    console.log(Mul); // Print the result matrix
}

let m=[[1,2,3],[4,5,6],[1,2,3]];
let n=[[1,2,3],[3,2,1],[1,2,3]];

MatMulti(m,n); // Call MatMulti with provided matrices m and n
