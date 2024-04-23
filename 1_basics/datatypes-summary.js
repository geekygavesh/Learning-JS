// Primitive datatypes

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt


//JavaScript is a dynamically typed language,
// which means that data types of variables are determined by the value they hold at runtime and
// can change throughout the program as we assign different values to them

const scoreValue = 100;
const score = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;  // undefined

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id===anotherId);

// Reference(Nonprimitive)

// Array, objects, functions

const heroes = ["ironman","thor","hulk"];

let myobj ={
    name:"Gavesh",
    age:20,
}

const myfunction =function(){
    console.log("helllo world");
}
