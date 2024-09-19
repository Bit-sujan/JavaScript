const mynums = [1,2,3,4,5,6,7,8,9]

//const num1 = mynums.map((num)=>num + 10)


// chaining
const num1 = mynums
                .map((num) => num * 10)
                .map((num)=> num + 1)
                .filter((num)=> num >=40)
console.log(num1);
