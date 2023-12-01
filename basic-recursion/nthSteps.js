//Number of ways to climb the n steps 
//Hint => It is similar to the fibonacci series

function nthSteps(n){
    //base case
    if((n==1)||(n==2)){return n}

    //recursive call
    let steps = nthSteps(n-1)+nthSteps(n-2);

    return steps;

}

let result = nthSteps(4)
console.log(result)

