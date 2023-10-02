//ALgo
//without using the array here 
/*
first traverse from backwards 
then store the temporary string in the temp variable -> char+str
now when we got the space ==> then put in the mainString there ..
*/

//reversing the string
function reverse(str){
    let mainStr="";
    let tempStr="";
  //traverse the string from backward ..
  let len = str.length;

  for(let i=len-1;i>=0;i--){
    //now during space 
    if(str[i]===" "){
        tempStr=tempStr+str[i];
        mainStr=mainStr+tempStr;// here we are adding the character in fron of 
        tempStr=""; //reinitialise the tempStr here bro 
    }
       else //lets create the string character here bro 
        tempStr=str[i]+tempStr;

  }
  //now add the tempStr to the main str 
  mainStr=mainStr+tempStr;
  return mainStr;


}

let str="my name is anthony gonsalves"
let main = reverse(str)
console.log(main)