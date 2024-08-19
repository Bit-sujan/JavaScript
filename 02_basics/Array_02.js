const cricket_hero= ["virat", "Dhoni", "Rohit"]
const football_hero= [ "christiano", "neymar", " Messi"]

cricket_hero.push(football_hero)
console.log(cricket_hero); // output >> [ 'virat', 'Dhoni', 'Rohit', [ 'christiano', 'neymar', ' Messi' ] ]

const AllHeros = cricket_hero.concat(football_hero)
console.log(AllHeros); // merge this two arrays

const all_new_hero = [ ...cricket_hero , ...football_hero] // this is sperad operator, merge two and more than two arrays.
console.log(all_new_hero);

const anoth_array =[1,2,3,[4,5,6],[7,8[9,10]]]
const real_array = anoth_array.flat(Infinity) // infinity for depth and flat is for concatinate all the sub arr elements into a new array with spread.
console.log(real_array);

console.log(Array.isArray( "Sujan"))
console.log(Array.from("Sujan"));
console.log(Array.from({ name :"Sujan"})); // intresting
console.log(" Hello everyone");

let score1 = 34734
let score2 = 89790
let score3 = 74648

console.log(Array.of(score1,score2,score3));
