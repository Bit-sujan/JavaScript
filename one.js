//if 

//const isUserLogged = true

if ( 2 === '2'){   // === -> that is strict equal , its check the datatype
    console.log("executed");
    
}

const temp = 45 ;
if (temp < 50){
    console.log("less than 60");
}else{
    console.log("temperature is greater tha 50");
    
}
//  <, >, <=, >=, ==, !=, ===, !==

const score = 200
if ( score > 100){
    const power = 'fly'
    console.log(`user power: ${power}`);
}

const balance = 1000

if(balance > 500 ) console.log("test");


const isUserLogged = true
const debitcard = true
const LoggedinGoogle = false 
const LoggedInEmail = true

if( isUserLogged && debitcard){     // && -> that is and statement , if all conditon is true the it return true ,if any one is false then it return false. 
    console.log("Allow to buy ");
    
}

if( LoggedinGoogle || LoggedInEmail){ // || -> this is "or" , if any one contion if true then it return true value.
    console.log("user logged in");
    
}