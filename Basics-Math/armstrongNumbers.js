//here we will find whether a given number is armstrong or not 
/*
Armstrong number means the sum of all digits cube is equal to that number only

*/

//recursively ...

function arm(num,sum){
    if(num==0){return sum}
    else{
        let rem=num%10;
        sum=sum+(rem**3)
        return arm(Math.floor(num/10),sum)
    }
  
}

let a = 153;
let s = arm(a,0);
if(a==s){console.log("The number is armstrong number ")}
else{console.log("The number is not armstrong number ")}