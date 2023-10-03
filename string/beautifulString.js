/*
Here we need to find the beautiful string like --> 0101010 or 101010 alternate one and zeroes
1> generate the maximum possible beautiful string.
2> difference between the given string
3> compare both and which ever is small return that .
*/

//Generating the beautiful string ...
function maxString(length){
    let str="";
    let str2=""
for(let i=0;i<length;i++){
    if(i%2==0){ 
        str=str+1;
        str2=str2+0;
    }
    else {
        str= str+0;
        str2=str2+1;
    }
   
}

// this is how you return two variables

return [str,str2]
}


//Function to compare with the difference of both string bro 

function beautiful(str){
   //fetching length of strin
    let len = str.length;
    //store the value which i got from the maxString function 
    let [str1,str2]=maxString(len);
    //let create compare variables
    let c1=0,c2=0;

  //here by loop we can compare
  for(let i=0;i<len;i++){
    if(str1[i]!=str[i]){c1++}
    if(str2[i]!=str[i]){c2++}
  }
 
   //comparing the two values and returning the smaller ones
   let result =c1<c2?c1:c2;
   return result;

}

let str="0110010101";
let result = beautiful(str);
console.log(result)