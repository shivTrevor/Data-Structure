//so here i am finding whether the array in recursion pass as call by value or call by reference
//here i am searching whether array retain when recursive function has been callen first (not tail recursion)

function recArrCall(arr,result,i){
    //function call first and then push it into resultant array here
    if(i>=arr.length){
        return ;
    }
    
    recArrCall(arr,result,i+1);
    result.push(arr[i]);

    //so here do one thing bro 
    console.log(result);
}

let arr=[1,2,3,4,5,6,7];
let result=[];
recArrCall(arr,result,0);

