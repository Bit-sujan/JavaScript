//for in 

//["", "", "",""]
//[{},{},{}]

const code = [ ' js', 'pyhton', ' java', 'ruby', 'c++']

// code.forEach(function(val){
//     console.log(val);
    
// })

// code.forEach((item)=>{
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
    
// }

// code.forEach(printme)


// code.forEach((item,index, arr)=>
//     {
//         console.log(item,index,arr);
        

// })


const coding = [
    {
        langugeName : " javascript",
        languageFileName : "js"
    },
    {
        langugeName : " java",
        languageFileName : "java"
    },
    {
        langugeName : " python",
        languageFileName : "py"
    }
]

coding.forEach((item)=> {
    console.log(item.langugeName);
    
})