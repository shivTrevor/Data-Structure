
function isPalindrome(number) {
   //Here I can also convert the number to string by the help of for loop but toString is easy 
   let strNumber = number.toString();

    // Use two pointers approach to check for palindrome
    let left = 0;
    let right = strNumber.length - 1;

    while (left < right) {
        if (strNumber[left] !== strNumber[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

//function which go to the next number and check if the string is palindrome or not 
function nextPal(str){
    //but right now i am not convert -> simply I can do with the for loop but its easy 
    let number = parseInt(str);
    number++;
 //if a str is palindrome or not 
 while(true){
    if(isPalindrome(number)) return number;
    number++;

 }

}




let str="1221";
let num = nextPal(str);
console.log(num)

