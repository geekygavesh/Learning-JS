function saymyname(){
    console.log("g");
    console.log("a");
    console.log("v");
}
// saymyname()

// function add2number(number1,number2){
//     console.log(number1 + number2);
// }
function add2number(number1,number2){
    let result = number1 + number2
    return result
}
const result = add2number(3,5)
// console.log("result:",result);

function loginusermessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginusermessage()) // empty string -> just logged in // kuch pass ni kiya to undefined


function calculatecartprice(val1,val2,...num1){
    return num1
}
// console.log(calculatecartprice(200,30,23));

const user = {
    username : "gavesh",
    price : 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    username: "sam",
    price : 299
})

const myNewarray = [100,300,34,45]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(myNewarray));
