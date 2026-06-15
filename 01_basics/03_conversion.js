/*let score ="Ayon"

console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = Number(score);//rely less on number
console.log(typeof valueInNumber);//it should not convert but it converts
console.log(valueInNumber);//NaN special type

let score1 = null

//console.log(typeof score1)//object
console.log(typeof(score1))

let valueInNumber1 = Number(score1);//rely less on number
console.log(typeof valueInNumber1);
console.log(valueInNumber1)//0

let score2 = undefined

console.log(typeof score2)//undefined
//console.log(typeof(score2))

let valueInNumber2 = Number (score2);//rely less on number
console.log(typeof valueInNumber2);//number
console.log(valueInNumber2)//NaN
*/
/*
"33" => 33
"33abc" => NaN
1 => true
"" => false
"Afd" => true
*/
let isLoggedIn = "A"
let boolisLoggedIn = Boolean(isLoggedIn)
//console.log(boolisLoggedIn)

let number = 67
let stringnumber = String(number)
// console.log(stringnumber)//67
// console.log(typeof stringnumber)

// ***********************Operations***********************

let value = 4
let negvalue = -value
//console.log(negvalue)

// console.log(2*8)
// console.log(2%6)

let str1 = "Hello"
let str2 = " Ayon"
let str3 = str1 + str2
// console.log(str3);
// console.log("2"+5)
// console.log(2+"5")
// console.log(2+2+"1")//41
// console.log("1"+2+2)//122

// console.log((3+4) *5+3)
console.log(2+"4"+3)//243
console.log(+true);//1
//console.log(true+); problematic code
console.log(+"");//0


console.log(1 +(((2 ** 3) * 4) / 5 )<< 6);
console.log(null == undefined)
console.log(!null)//treats "null" as zero i.e. returns true

