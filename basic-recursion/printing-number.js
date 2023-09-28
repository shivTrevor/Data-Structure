//here printing number form n 

//printing number from 1 to 10 here bro 
function printing(num,N){
  if(num > N) return;
  else{
    console.log(num)
     printing(num+1,N);
  }
}

//  calling the number here bro 
// printing(0,10);

//===========================================================================================

// printing the number from 10 to 1 here bro 
//here we are using the printing the number fom 10 to 1
function revPrinting(num,N){
    if(num > N) return;
    else{
    
       revPrinting(num+1,N);
       console.log(num)
    }
  }
   
  //so here printing the numbers reversively 
  revPrinting(1,10)