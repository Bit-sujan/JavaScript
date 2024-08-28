//Immediately Invoked Function Expressions (IIFE)

(function yooo(){
    // named iife
    console.log(" db connected");
    
})();

((name) =>{
    console.log(`db connected two ${name}`);
    
})('sujan Pal')