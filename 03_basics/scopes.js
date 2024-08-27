// child can access the parent variable , but parent can not access the child variable

function one (){
    const username = "sujan"
    function two(){
        const website = "Youtube"
        console.log((username));
        
    }
    //console.log(website); // this is an error.it can not access the parent variable
    two()
    
}
one()

if (true){
    const username1 = "sujan pal"
    if(username1 === "sujan pal"){
        const web = " instagram"
        console.log(username1 + web);
    }
    //console.log(web);// this an error 
    
}
console.log(username1);


//++++++++++++++++ interesting+++++++++++++++++

console.log(addone()); // you can print this line before 32 , its does not shows error.

function addone(num){
    return num +1 
}

//addone()  // its aa correct funtion call


//console.log(addTwo(6)); // this shows an error because you can not print this before 39 line.

const addTwo = function(num){ // funtion declaretion a variable
    return num + 2
}
console.log(addTwo(6));
