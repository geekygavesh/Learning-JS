const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc,currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// },0) // ye 0 acc ki intitial val hai


const mytotal = mynums.reduce( (acc,curr) => acc+curr,0)

console.log(mytotal);

const shoppingcart = [
    {
        itemname : "js course",
        price : 2999
    },
    {
        itemname : "py course",
        price : 999
    },
    {
        itemname : "webd course",
        price : 4999
    },
    {
        itemname : "ds course",
        price : 5999
    }
]

const pricetopay = shoppingcart.reduce( (acc,item)=> acc+item.price,0)
console.log(pricetopay);