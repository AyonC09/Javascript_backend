const userEmail = " "

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have user email")
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//[], {}, "0", "false", " ", function(){}

const user = []

if(user.length === 0){
    console.log("Empty Array")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

//Nullish Coalescing Operator(??): null undefined

let val1;
//val1 = 5 ?? 10 //5
//val1 = null??10 //10
//val1 = undefined??10//10
//val1 = undefined ?? null //null
val1 = null ?? undefined //undefined
// false then also falsy values
console.log(val1)

val2 = undefined || null 
console.log(val2)

val3 = null ^ undefined
console.log(val3)

val4 = null && undefined
console.log(val4)