//let me create a program of recursion where i have to print the 5 numbers here bro 

function recursion(i){
 if(i==0)return;
 console.log(i);
 recursion(i-1)
}

recursion(5);