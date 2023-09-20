//so here i will make all the basic bitwise operation program bro 

//creating a function which convert a decimal value to the binary and vice versa ka bhi ek bana lete hai 
//I can do it using recursive function as well as the 
function converter(num){

    let arr=[];
    do{
        arr.push(num%10);
    }while(num/10)

    arr.reverse();
    console.log(arr);

}

converter(25);