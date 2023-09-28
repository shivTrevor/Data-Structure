//so here we are going to find the factorial of the numbers

function factorial (n,num,fact){
 if(n===num){return fact}
 fact = fact*n;
return factorial(n+1,num,fact)
}
 
// let num = factorial(1,10,1);
// console.log(num)

//=========================================================================================
//so I have to use memo here 

let memo = [];

function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    if (memo[n] !== undefined) {
        return memo[n];
    }

    memo[n] = n * factorial(n - 1);
    return memo[n];
}

const n = 10;
memo = Array(n + 1).fill(undefined);

const result = factorial(n);

console.log(`Factorial of ${n} is: ${result}`);
