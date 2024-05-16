// DATES

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

//let mycreateddate = new Date(2024,4,23 , 5,3) //Thu May 23 2024 5:03:00 AM
let mycreateddate = new Date("2023-05-21") //5/21/2023, 12:00:00 AM
// console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getDay());
console.log(newdate.getMonth());