const myNum = [1,2,3,4,5,6,7,8,9,10]

const initial_value = 0;
const sumWithInitial = myNum.reduce(
    (accumulator,current_val) => accumulator + current_val,
initial_value)

console.log(sumWithInitial)

const shopping_cart = [
{
    itemName:"jscourse",
    price:2999
},
{
    itemName:"machinelearning",
    price:8999
},
{
    itemName:"java",
    price:3999
},
{
    itemName:"devops",
    price:5999
},
]

const pricetoPay = shopping_cart.reduce( 
    (acc,curr) => acc + curr.price , 0
)

console.log(pricetoPay)