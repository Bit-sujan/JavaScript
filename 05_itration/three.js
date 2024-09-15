// for of


const a = [ 1,2,3,4,5]
for (const num of a) {
    console.log(num);
    
}

const greeting = " hello sujan "
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

//map

const map = new Map() // it  takes always unique value.
map.set('usa',"United state")
map.set('rus',"russia")
map.set('ind',"india")

console.log(map);


for (const [key, value] of map) {
    console.log(key + ":-" + value);
   

}

// const my_object ={
//     'game1' : "bgmi",
//     'game2' : "igi"

// }
// for (const [key, value] of my_object) {
//     console.log(key + ":-" + value);  // this shows error beacuse object is not iterable
    
// }