//minimum paranthesis 

// Iterative approach ..

function minPar(str){
    let count=0;
 for(let i =0;i<str.length;i++){
    if(str[i]=="(") count++;
    else { count--}
 }
 return count;
}

let str="(()()((()))))";
let result = minPar(str);
console.log(Math.abs(result)) // Math.abs for finding the mod of number

/*by using ternary operator makes it interesting
 bal += p[i] == '(' ? 1 : -1;
 
        // It is guaranteed bal >= -1
        if (bal == -1) {
            ans += 1;
            bal += 1;
        }
    }

//============================================================================================

If we dont wanna use the Math.abs 
 if(str[i] === '('){
            openCount++;
        } else if(str[i] === ')'){
            if(openCount > 0){
                openCount--;
            } else {
                closeCount++;
            }

================================================================================
More methods are stacks , using string manipulation (not recommended)

*/