// var c = 300
let a = 300
if(true){
    let a = 10;
    const b  = 20;
    // console.log(a);
    // var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "gavesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "hitesh"
    if(username=="hitesh"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++  INTERESTING ++++++++++++++++++

function addone(num){  // is case me declare se phle call kr skte
    return num +1
}
addone(2);

const addtwo = function(num){   // is case me declare se phle error ajayga (hoisting)
   return num + 2;
}
addtwo(2)