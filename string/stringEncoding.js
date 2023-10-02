//so here we are wrinting the string encoding in front of string 
// aabbccdd ==> s2b2c2d2
// so for string encoding method what should i 

/* 
algo ==>
1> first make the character array
2> then store the value of each character in character array 
3> after that create a loop and put the character and its value there
*/



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
    let resultString="";
    //now the string to store the character array and the string here 
    for(let i=0;i<=charArray.length-1;i++){
        resultString=resultString+charArray;
    }
}