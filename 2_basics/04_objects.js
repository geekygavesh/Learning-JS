// const tinderuser = new Object();  ye singleton object hai
const tinderuser = {}; // ye non singleton hai
tinderuser.name = "sammy"
tinderuser.id = "123abc"
tinderuser.isLoggedIn = false;
// console.log(tinderuser);

const regularuser = {
    email : "some@gmail.com",
    fullname :{
        userfullname : {
            firstname : "gavesh",
            lastname : "tomer"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);


const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]
users[1].id
console.log(tinderuser);

console.log(Object.keys(tinderuser)); // array output aya
console.log(Object.entries(tinderuser)); // array ke andr array output aya