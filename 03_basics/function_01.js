// FUNCTIONS >>>

function myname(){
    console.log("Sujan ");
    console.log("Pal");
    
// }
//myname // >> this is functions referance
myname() // this is function call

function addTwoNmubers(num1 , num2){
    console.log(num1+ num2);
}
function addTwoNmubers(num1 , num2){
    // let result =num1+ num2
    // return result;
    return num1 + num2s
}
 const result = addTwoNmubers(20,40)
console.log("result : ",result);


// function username(user){
//     if(user === undefined){
//         console.log("please enter a user name..");
//         return
//     }
//     return `${user} just logged in `

}
console.log(username())

function username(user ="ram"){
    if(!user ){
        console.log("please enter a user name..");
        return
    }
    return `${user} just logged in `

}
console.log(username("sujan")) // its can override the previous value


function CartPrice(...num1){    //   ...  > rest operator for this use case
    return num1

}
console.log(CartPrice(200,555,433,299));  // output display in the array form.

function CartPrice1(value1, value2, ...num3){    
    return num3

}
console.log(CartPrice1(524,245,586,555,5554,852));

const user11 = {
    username11 : "sujan",
    id44 : 748425424

}

function handleobject(anyobject){
    console.log(`username is ${anyobject.user11} and price is ${anyobject.id44} `);
    
}
handleobject(user11)
// handleobject(
//     {
//        username12 : "sam",
//        id1 : 233 
//     }
// )


const myarray = [ 200,400,555,456]
function returnvalue(getArray){
    return getArray[2]
}

console.log(returnvalue(myarray));


