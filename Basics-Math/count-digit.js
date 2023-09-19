 //In this problem we are counting the digits of 
 //approach ==> // I have to count the number of digits ..

 //important point here since there is no data types in the js so math.floor is highlighted
 function numberOfDigits(num){
  i=0;
  while(num){
    i++;
    num=Math.floor(num/10);
  }
    console.log("Number of Digits  "+ i);
 }


 //here giving the input 
 numberOfDigits(12345);