// let score = "33abc". // NaN
let score = null // 0
// undefined me bhi NaN

//console.log(typeof(score));
let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" -> 33
// "33ab" -> NaN
// true -> 1
 
let isLoggedIn = "gavesh";
let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// 1-> true 0-> false
// "" -> false ;
//  "gavesh"-> true

let somenumber = 33

let stringnumber = String(somenumber);
// console.log(stringnumber);
// console.log(typeof stringnumber);

// ************ Operations *************

let value = 3;
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " gavesh"
let str3 = str1 + str2
// console.log(str3);

// console.log("1"+ 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);   // basically jo phle ayga vo operation krna
// console.log(1 + 2 + "2");   // agar string phli ari to concatenate krdo else agar no. h to phle unka sum

// console.log(+true);
// console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);