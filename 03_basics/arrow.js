const user = {
    username: "Sujan",
    price: 699,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // print the current context
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this); // for node environment current context is empty

function chai(){
    let username = "Sujan pal"
    console.log(this.username); // we can not run in this function , it shows undefined
}

chai()

// const chai = function () {  
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {  // this is arrow function , we just remove the word 'function' and write '=>'
    let username = "sujan pal"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // this explicitly return
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) //  implicitly return 

const addTwo = (num1, num2) => ({username: "hitesh"}) // thats when we return the object.


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()