//  singletone
// 

// object literals  >>>
const mysm = Symbol("key11")

const user = {
    name : "sujan",
    " full name " : "sujan pal",
    age : 20,
    location : "kolkata",
    email :"sujan.pal@gmail.com",
    [mysm] : "mykey1",//delaration for symbol with this third bracket.
    isLoggedIn : true,
    lastLoggedindays : [ " Monday", "wenesday"]
}

console.log(user.age);  // this is not the right way
console.log(user["email"]);  
console.log(user["full name"]);  
console.log(user[mysm]);  

user.email = "sujanpal@google.com" // overwrite the value


//Object.freeze(user) // locked for overwrite

user.greeting = function(){
    console.log("hello JS user ,i am a beginer coder");
}
user.greetingtwo = function(){
    console.log(`hello JS user ${this.location}` );
}
console.log(user.greeting());
console.log(user.greetingtwo());

