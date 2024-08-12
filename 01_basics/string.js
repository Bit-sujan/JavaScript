// STRING AND STRING METHOD

const name = "Sujan Pal"
const repoCount =70

//console.log(name +repoCount + "yo boy");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("jay-Shree-Ram")

console.log(gameName[0]);
console.log(gameName.__proto__); //return many objects ,we see this in chrome console.

console.log(gameName.charAt(2));
console.log(gameName.indexOf('S'));

const newString = gameName.substring(0,7) // first number is start, and 2nd is last number is end.
console.log(newString);

const anotherString = gameName.slice(-8,2) // it takes negetive value, its indexing is reverse.
console.log(anotherString);

const newStringOne = "   sujan    "
console.log(newStringOne);
console.log(newStringOne.trim());//  it remove extra white spaces + line terminator.

const url = " https://sujan.com/sujan%20pal"
console.log( url.replace('%20','-'))
console.log( url.includes(' sujan')) // its return true or false.

console.log(gameName.split('-')); //this string split on dash ("-") 



