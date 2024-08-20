//const dateUser = new Object()

const dateUser = {}

dateUser.id = "5635368"
dateUser.name = "sunny"
dateUser.isLoggedIn = false

//console.log(dateUser);

const regularUser = {
    email : "nothing@gmail.com",
    fullname :{
        username: {
            firstname : "sujan",
            lastname : " Pal"
        }
    }
}
//console.log(regularUser.fullname);


const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "c", 4 : "d"}

//const obj3 = { obj1 , obj2}

//const obj3 = Object.assign({}, obj1, obj2) // {} >> this is for target but this will not mandatory
//console.log(obj3);

const obj3 = { ... obj1, ...obj2}
//console.log(obj3);


const userss = [
    {
        id: 1,
        email: "ss@gmail.com"
    },
    {
        id: 1,
        email: "ss@gmail.com"
    },
    {
        id: 1,
        email: "ss@gmail.com"
    },
    {
        id: 1,
        email: "ss@gmail.com"
    },
]

user[1].email
console.log(user);

console.log(Object.keys(user)); // allkey values mearge in a single array.
console.log(Object.values(user));// same as above with values
console.log(Object.entries(user));// key and values ar  in a single array.

console.log(user.hasOwnProperty('isLoggedIn'));

