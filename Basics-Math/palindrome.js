//Here we are finding whether the number is palindrome or not 

/*
  Algorithm-->
  1> Reversing the number 
  2> if the reversed number is equal to the previous number then its palindrome
  3> else is not a palindrome 
*/

function Palindrome (num){
     let rev=0,rem=0;

    //Here reversing a number 
    while(num){
   rem=num%10;
   rev=rev*10+rem;
   num = Math.floor(num/10);
    }
    return rev;

}

// Calling function iteratively
function recPal(num,rev){
  if(num==0){return rev}
  else{
    let rem = num%10;
    rev=rev*10+rem;
    num = Math.floor(num/10)
    console.log(num)
    return recPal(num,rev)
  }
}


  //caliing the recursive palindrome function 
  let numb =123321
  let isRev= recPal(numb,0);//Recursive calling 
  // Here we can call by the iterative method
  console.log(isRev)
  if(isRev==numb){console.log("The number is palindrome")}
  else{console.log("The number is not palindrome")}




