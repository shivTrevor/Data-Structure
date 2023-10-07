//Given input that one is subsequence of other or not

function isSubsequence(str,que){
   
    let i=0,l1=str.length-1;
    let j=0,l2=que.length-1;

    while(j<=l2){
        if(i>=l1){return false}
        else{
      if(str[i]===que[j]){
        i++;
        j++;
      }
      else{
        i++;
      }
    }
    }
    return true;
}

let str="shivtrevor";
let que="itvt"
let flag = isSubsequence(str,que);
console.log(flag)