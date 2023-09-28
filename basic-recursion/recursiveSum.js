//create me a recursive sum method bro .
//here by this algorithm I have to find the recursvie sum method

function recSum(n,num,sum){
    if(num<n){return sum}
    else{
        sum=sum+n;
        //print the sum value here bro 
        return recSum(n+1,num,sum)
    }
}

//now taking the value of sum and then printing it bro 
let val=recSum(1,10,0);
// now printing it 
console.log(val)