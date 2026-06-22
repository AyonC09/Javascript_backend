//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)//object

//let myCreatedDate = new Date(2026,0,9)

// let myCreatedDate1 = new Date("2026-07-18")
// console.log(myCreatedDate1.toDateString())// YYYY-MM-DD
// let myCreatedDate = new Date("06-18-2026")
//console.log(myCreatedDate.toLocaleString())// MM-DD-YYYY

let myTimestamp = Date.now()
// console.log(myTimestamp)//milisecond time passed from 1st Jan 1970

// console.log(myCreatedDate.getUTCDay())//4
// console.log(myCreatedDate.getTime())//millisecond time
console.log(Math.floor(Date.now()/1000))

const newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.toLocaleTimeString())
console.log(Date().toLocaleString())