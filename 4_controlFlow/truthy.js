const useremail = "gtom@gmail.com"

if (useremail) {
    console.log("got email");
}
else{
    console.log("no email found");
}


// falsy

// false , 0 , -0 , BigInt , 0n , "" , null , undefined , Nan

//truthy

// true , "0" , 'false', " ", [] , {} , function(){}

//.    Nullish coalescing operator (??) : null undefined
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand
//  when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1 ;
val1 = 5 ?? 10

console.log(val1);

// ternary 
condition ? true : false