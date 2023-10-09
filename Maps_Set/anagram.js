//using the two maps 
//so what i am going to do is that 
//first fill the elements and frequency in the map then delete frequency from the map 
//if every character of map is zero then take it other wise leave it 

function anagram(str1,str2){
    let len1=str1.length;
    let len2 = str2.length;

 let map= new Map();
 //if the length doesnt same..
 if(len1!==len2){return false}

 //putting all the element in the map 1 
 for(let i=0;i<len1;i++){
    //store the element in the map 
    if(!map.get(str1[i])){
        map.set(str1[i],1);
    }
    //if there is an element 
    else map.set(str1[i],map.get(str2[i])+1);
 }

 //I am using again for loop where
  for(let i=0;i<len2;i++){
    //if that particular string is not in the map just return false
     if(!map.get(str2[i])){
       return false;
     }
     else{
        //if that particular character is there then 
        //decrease the character by one 
        map.set(str2[i],map.get(str2[i])-1)
     }
  }

  //check if every element is zero
  for(let index of map.keys())
  {
    if(!map.get(index)==0) return false
  }
  return true;
    
}

let str1="shivnandan";
let str2="shivdannan";
let result = anagram(str1,str2)
console.log(result)