//so here finding the kth decrypted string bro ...
/*
Time complexity => O(n*m*(sum of numerical value ))  , 
n-> input string length , m-> input string - number of numerical value -> inside while loop 
  , sum of numerical value => inside for loop 

space complexity => O(n) -> result and temp string 
*/
function decrypted(str,k){
    //let initialise an empty string mere bhai 
    let temp="";
    let result="";
    //first we have inititalised the encrypted key ...
    for(let i=0;i<str.length;i++){
        //if the character is not a number then what should i do then what should we do bro 
        if(isNaN(str[i])){
         //
         temp+=str[i];
        }
        else{
            //catching what is the number here 
            let num=str[i];

            //putting the whole string bro number of times given by the num value s
            while(num!==0){
                //first time putting the whole string 
                for(let i=0;i<temp.length;i++){
                    //appending in the result string bro 
                    result = result + temp[i];
                }
                //number of times here bro 
                num--;
            }
            //reinitialise the temp string bro 
            temp ="";
        }
    }
    
    //so here i am finding the kth character decrypted string bro 
    //I mean 9 th character is which is 8th position
    let resultChar = result[k-1];

     return resultChar;

}

//now if i got a function decrypted then what i will do 

let str="abc3a2e4";
let result = decrypted(str,6);
console.log(result)