// for in loop

const my_object = {
    js : "javascript",
    cpp : 'c++',
    rb : "ruby",
    swift : " Swift by apple"
}

for (const key in my_object) {
    //console.log(`${key} shortcut is for ${my_object[key]}`);
    
}
// for in loop in array
const program = [ "js", "java", "py", "c++"]
for (const key in program) {
    console.log(key); //  it print the indices of the elements in the program array).
    console.log(program[key]);
    
        
    }
