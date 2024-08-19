// Arayy....... (collection of multiple items in single variable ,  javaScript Array is resizable)

const myarr= [5,4,3,8,6]
const mynames= [ "sujan", " dwan"]
const myarr2= new Array(2,23,44,54,)

console.log(myarr[2]);

//// Array Methods >>>

myarr.push(45) // for add elements at last  -"push"
myarr.push(70)
myarr.pop()// deleteing the last value which are present in new array 

myarr.unshift(64) // add this element at the first 
myarr.shift() // deleting  the first element of the array. 

console.log( myarr.includes(8)); // return type boolean
console.log( myarr.indexOf(8)); 

const newArr = myarr.join() //all the element converts into a string

console.log(myarr);
console.log(newArr);
console.log(typeof newArr); // ans >> String

// Slice, Splice  >>> *** imp for invertview question

console.log("A >> the parent array", myarr);
const myA1 = myarr.slice(1,3)
console.log(myA1);// print the child_1 array
console.log("B >> the parent array after slice", myarr); 
const myA2 = myarr.splice(1,3)
console.log(myA2);// print the child_2 array
console.log("c >> the parent array after splice", myarr);

