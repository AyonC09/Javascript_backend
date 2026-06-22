const score =100
//console.log(score)
const balance = new Number(300)
//console.log(balance)
//console.log(typeof(balance))//object

//console.log(balance.toString().length)
console.log(balance.toFixed(1))//300.0

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4))//123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))

//++++++++++++++++++Maths++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.7))
console.log(Math.ceil(4.4))
console.log(Math.floor(4.5))
//min(4,3,6,77) , max(3,4,5,67)

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.round(Math.random()*10))
//random() returns a value between 0 and 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)
