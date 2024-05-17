// singleton

// object literals
const mysym = Symbol("key1")
const JSuser = {
    name : "Gavesh",
    [mysym] : "mykey1",
    age : 20,
    location : "chandigarh",
    lastLoggedIn : ["monday","saturday"]
}
// console.log(JSuser.name);
// console.log(JSuser["name"]);
// console.log(typeof JSuser[mysym]);

JSuser.age = 21
// Object.freeze(JSuser)
JSuser.age = 25
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("hello users");
}
JSuser.greetingtwo = function(){
    console.log(`hello users,${this.name}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingtwo());
