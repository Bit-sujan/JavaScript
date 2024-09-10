
const userEmail = []

if(userEmail){
    console.log("got a user email");
}else{
    console.log("don't have a  user email");
    
}

// falsy valuess

//  false, 0 , -0 , bigInt 0n , "", null, undefined, Nan


// truthy values

// "0" - zero in string , 'false' , " ", [], {},function(){}

// false == o => true , false === '' => true, 0 =='' => true

if ( userEmail.length === 0){    /// checking array is empty or not
    console.log("array is empty");
    
}

const emptyObj = {}

if (Object.keys(emptyObj)){   // this create a empty array of keys
    
}
if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

 // Nullish coaleshing Operator (??) : null underfined >>

   // that works in working the error
 let val1 ;
 //val1 = 5 ?? 10
 //val1 = null ?? 10  // if first value is null so take the second value.
 //val1 = undefined ?? 15
 val1 = null ?? 10 ?? 15

 // Terniary Operator

 // condition ? true ? false

 const iceprice = 100
 iceprice <= 80 ? console.log("less than 80"): console.log("more than 80");
 
 