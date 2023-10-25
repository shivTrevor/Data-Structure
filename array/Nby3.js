//By using map data structure having time complexity => O(n) and space O(n)

//new concept -> for...in unstructure like the objects and all 
//for ..of -> structured like objects , array , maps etc

function Nby3(arr){
    //now create a map and set the frequence key value pair here bro 
     let map = new Map();

     //after creating a map put all elements in that
     for(let i=0;i<arr.length;i++){
        //if map has no element then 
        if(!map.has(arr[i])){ map.set(arr[i],1)}
       else{
        //if map has some count frequency 
        map.set(arr[i],map.get(arr[i])+1)
     }
}

let third = Math.floor(arr.length/3)
let result = []
//by using for ...of loop we iterate over the elements of the map bro 
for (let [key,value] of map) {
    if(value>third){result.push(key)}}
    
    if(result.length!==0) return result;
    else return -1;
}

let arr=[1,2,3,1,2,1,1,2,2,1]
let maj = Nby3(arr);
console.log(maj)
