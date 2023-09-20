//Finding the greatest divisor which divides both the number ....

/*
Algorithm==>
1> Find the smaller number
2> Iterate till half of smaller number
3>Check whether each i divides both 
4> if yes put it in max 
5> at the end return max...
*/

//============================================================================
//Using iterative approach

function gcd(n,m){;

    let small=0,max=0;
    //finding the smaller number 
    if(n<m){small=n}
    else{small=m}

    //Iterating till the half of the number here 
    for(let i=1;i<=Math.floor(small/2);i++){
        if(n%i==0&&m%i==0){max=i}
    }
    return max;
}

//=====================================================================================
//solving it using recursive approach

//function to find the greatest common divisor
function recGCD(i,small,max,n,m){
    if(i>small){return max}
    else{
        if(n%i==0&&m%i==0){max=i}
        return  recGCD(i+1,small,max,n,m)
    }

}

//function to define which number is smaller and which is bigger 
function whoIsSmaller(n,m){
    if(n<m){return recGCD(1,Math.floor(n/2),0,n,m)}
    else{ return recGCD(1,Math.floor(m/2),0,n,m)}
}

//=========================================================================================
//lets run the code with iterative approach here bro 
let g = whoIsSmaller(24,36);
console.log(g);


