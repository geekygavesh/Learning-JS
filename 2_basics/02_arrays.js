const marvel = ["thor","ironman","captain"]
const dc = ["superman","batman","flash"]
// marvel.push(dc)
// console.log(marvel);   // gnda trika array ke andar array
const allheros = marvel.concat(dc)
console.log(allheros);

const allnew = [...marvel,...dc];  // spread
console.log(allnew);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[5,6]]];
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);


console.log(Array.isArray("gavesh"));
console.log(Array.from("gavesh"));
console.log(Array.from({name:"gavesh"}));  // interesting returns empty ARR

let score1 = 100
let score2 = 1030
let score3 = 1700

console.log(Array.of(score1,score2,score3));