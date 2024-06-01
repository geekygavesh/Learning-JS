const user = {
    username : "gavesh",
    price : 99,

    welcomemessage : function(){
        console.log(`${this.username} , welcome to site `);
        console.log(this);
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);       /// jab bahr this print krrhe to alone value {} ye aarha bss

// function chai(){
//     let username = "gavesh"
//     console.log(this.username); 
// }
// chai()  // fxn ke andr this  nhi use kr paa rhe (only in objects)

const chai = function(){
    let username = "gavesh"
    console.log(this.username);
}
// chai()

// const addtwo = (num1,num2) =>{
//     return num1 + num2       // explicit 
// }
// const addtwo = (num1,num2) =>  (num1 + num2)  // implicit

const addtwo = (num1,num2) => ( {username : "hitesh"})  // in case of object 
    
console.log(addtwo(3,4));
