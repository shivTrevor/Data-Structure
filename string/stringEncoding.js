//so here we are wrinting the string encoding in front of string 
// aabbccdd ==> s2b2c2d2
// so for string encoding method what should i 

/* 
algo ==>
1> first make the character array
2> then store the value of each character in character array 
3> after that create a loop and put the character and its value there
*/

//one more way do it using the ascii but before that sort the particular array or string ...


function stringEncode(str){
    
    let charArray=[];

    //lets create a character array first 
    for(let i=0;i<=str.length-1;i++){
        
        if(!charArray[str[i]]){
            charArray[str[i]]=1
        }
        else{
            charArray[str[i]]=charArray[str[i]]+1;
        }
    }

   //creating a new string for storing the output
   let newStr=""
   //using js for ....in method
   
   for(let char in charArray){
      newStr=newStr+char+charArray[char];
     
   }
   return newStr;
 
}


let str="aaaabbbccd";
let finalStr=stringEncode(str)
console.log(finalStr)
