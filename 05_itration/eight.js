const nums = [ 1,2,3]

// const total = nums.reduce(function(acc, currVal){
//     console.log(`accumulator : ${acc} and current value : ${currVal}`);
    
//     return acc + currVal
// },0 )


const total = nums.reduce((acc, curr)=> acc + curr,0)

//console.log(total);


const shoppingcart = [
    {
        item : "java course",
        price : 2999
    },
    {
        item : "python course",
        price : 2599
    },
    {
        item : "c++ course",
        price : 1999
    }
]

const priceToPay = shoppingcart.reduce((accu , item)=>accu + item.price,0)
console.log(priceToPay);
