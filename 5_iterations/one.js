// for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

let myarray = ["batman","superman","ironman"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}

for (let index = 1; index <= 20; index++) {
    // if(index==5) break;
    if(index==5) continue;

    console.log(`value of i is ${index}`);

    
}