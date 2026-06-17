// console.log("2" > 1)
// console.log("02" > 1)
console.log("0" <= null)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
//numeric coercion for relational operator occurs but not for equality opeartor

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined < 0)

console.log(null == undefined)//bcz acc. to author it means absence of value and special case of JS

console.log("2" === 2)// do not convert
console.log("02" == 2)//converts