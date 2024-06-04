const myobj ={
    js : "javascript",
    cpp : "C++",
    rb : "ruby"
}
for (const key in myobj) {
    console.log(`${key} shorcut for ${myobj[key]}`);
}

const programming = ["cpp","js","rb","java"]

for (const key in programming) {
    console.log(programming[key]);
}