// console.log(2>1);
// console.log(2<1);

// console.log("2">1);
// console.log("02">1);

console.log(null>0);
console.log(null==0); // equality check doesnt do such conversions
console.log(null>=0);  // comparison ops convert null to a number 
// avoid such conversions/comparisons
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);

// === strictly check krta i.e datatype bhi check krta
console.log("2"===2); // this will return false 
