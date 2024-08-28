//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log(" db connected");
    
})();

((name) =>{
    console.log(`db connected two ${name}`);
    
})('sujan Pal')