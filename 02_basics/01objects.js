// Singleton
// Object.create()

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Ayon",
    "full name":"Ayon Chatterjee",
    age: 23,
    [mySym]:"mykey1",
    location:"Jabalpur",
    email:"ayon@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.location = "NewYork"
//Object.freeze(JsUser)
JsUser.isLoggedIn = true
console.log(typeof JsUser[mySym])

JsUser.greeting = function(){
    console.log("Hello User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`)
}
//this picks up the reference of the object
console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
