// Palindrome string bro 


function Palindrome(start,end,str){
    //if reach the last of an array 
    if(start>=end){return true}
    if(str[start]!==str[end]){return false}
    
    return Palindrome(start+1,end-1,str);

}
//here we are just comparing not swapping so we do not have to take the value here bro 
//so what we have to do here bro 
//lets create a string and then pass it in the function bro 

let str ="abcddcba";
let flag = Palindrome(0,str.length-1,str);
if(flag==true){console.log("Palindrome")}
else{console.log("Not a palindrome")}




