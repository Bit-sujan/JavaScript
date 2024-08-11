//primitive data type

// 7 type : String, number , null , Boolearn, undefined , Symbol, Bigint 
//( call by value )


//JS typically Dynamic
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsidTemp = null

let UserEmail; // that is undifned

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid);

const bigNumber = 37468438463435424n




//Reference ( Non - primitive)

//Array , objects , Functions

const heros = ["shaktiman" , " nagraj", " benTen"  ]

 let myObj = {             // objects
    name: " sujan ",
    age : 22,
}

//functions

 const myFunction = function(){      //  this function store in a variable , return object function 
    console.log(" hey , how are you ? ");
    
 }


//  Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

