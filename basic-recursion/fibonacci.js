//so here we are generating the fibonnaci sequence ....
//0,1,1,2,3,5,8
//Here we are using memoization bro 

var memo=[];
function fib(num){
      if(memo[num]){
        return memo[num]
    }
    else if(num==0||num==1){ 
        memo[num]=num;
        return memo[num]
    }
    else{
        //now here we will do memoization
         memo[num] = fib(num-2)+fib(num-1);
         return memo[num];
    }
}

//==============================================================================================================

// so we are defining the memo array and using it
const n = 10;
memo = Array(n + 1).fill(undefined);

//calling the fibo number here bro 
for(let i=0;i<=5;i++){
    console.log(fib(i));
}