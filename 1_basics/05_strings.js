const name = "gavesh";
const repocount = 50;

// console.log(name + repocount + "hey");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('gavesh-gt-23')
// console.log(gamename[0]);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());

console.log(gamename.charAt(2))
console.log(gamename.indexOf('v'));

const newstring = gamename.substring(2,4)
console.log(newstring);

const anotherstring = gamename.slice(-7,4)
console.log(anotherstring);

const newstringone = "   gavesh "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://hitesh.com/hitesh%20chowdhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(gamename.split('-'));  // '-' is the separator