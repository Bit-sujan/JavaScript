const score = 800
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // its returns 1 decimal '0' for that 1 after the number

const otherNumber = 523.7356
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // defult in usd locals
console.log(hundreds.toLocaleString('en-IN'));// in indian locals

//++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // always convert negetive number to positive number
console.log(Math.round(4.6));// randomly choose upper value or lower value.. most useble.
console.log(Math.ceil(4.2));// alwayas choose he upper value 

console.log(Math.floor(6.8)); // always choose the lowwer value
console.log(Math.random()); // it choose random value ..and its takes value range o to 1
console.log(Math.random()*10+1); // for minimun value 1 
console.log(Math.floor(Math.random()*10)+1); // round of lowest value

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1)) + min);








