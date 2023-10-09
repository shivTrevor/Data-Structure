//Here the problem statement is intersection of two sorted array 


function intersection(a,b){
    let result=[];
  let i=0,j=0;
  let l1=a.length,l2=b.length;
  while(i<l1 && j<l2){
     if(a[i]<b[j]){i++}
     else if(a[i]>b[j]){j++}
     else{
        result.push(a[i]);
        i++;
        j++;
     }
  }
    return result
}

let a=[1,1,1,2,5,5,5,6,7,8];
let b=[1,2,2,4,5,7,9];
let result=intersection(a,b)
console.log(result)