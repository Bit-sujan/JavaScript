const code = [ ' js', 'pyhton', ' java', 'ruby', 'c++']

// const value = code.forEach((item)=>{ // foreach does not return any value
//     console.log(item);
//     return item // its shows undefined in the terminal
    
// })

//console.log((value));

const number = [ 1,2,3,4,5,6,7,8,9,10]

//const newNum =number.filter( (num) => num > 4) // give a call back function and a condition.. and here num is the object and we access with num

// const newNum =number.filter( (num) => {
//     return num > 4  // if we do not write the return word so this shows empty array.
// }) 
//console.log(newNum);

// const num100 = []
// number.forEach((num)=> {
//     if(num > 4){
//           num100.push(num)
//     }
// })

// console.log(num100);
 
 

const book =[
   {title: 'Book1', genre: 'fiction',publish: 1988, edition: 2007 },
   {title: 'Book2', genre: 'non-fiction',publish: 1978, edition: 2005 },
   {title: 'Book3', genre: 'physics',publish: 1980, edition: 2004 },
   {title: 'Book4', genre: 'biology',publish: 1788, edition: 2010 },
   {title: 'Book5', genre: 'chem',publish: 1908, edition: 2012 },
   {title: 'Book6', genre: 'math',publish: 1998, edition: 2005 },
   {title: 'Book7', genre: 'physics',publish: 1987, edition: 2002 },
   {title: 'Book8', genre: ' non-fiction',publish: 1928, edition: 2024 },
   {title: 'Book9', genre: 'fiction',publish: 1798, edition: 2008 },
   {title: 'Book10', genre: 'history',publish: 1888, edition: 2014 }
]


let userbooks = book.filter((bks)=>bks.genre === 'history') // bk is the object which we use.

userbooks = book.filter((bks)=>{
    return bks.edition >= 2000 && bks.genre === 'fiction' ;
})

console.log(userbooks);


