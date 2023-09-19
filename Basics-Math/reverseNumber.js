// In this coding problem I am going to reverse the particular number 

let rev=0 , rem=0;

function reverse(num){

   while(num) {
   rem = num%10
   num = Math.floor(num/10)
   rev =rev*10+rem
   }
  console.log(rev)
}

reverse(123)