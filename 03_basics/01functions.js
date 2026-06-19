function addtwonumbers(number1,number2){
  //  console.log(number1+number2);
  return number1+number2
}

const result = addtwonumbers(3,5)

console.log("Result:",result)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Ayon"))
// console.log(loginUserMessage())//undefined


// function loginUserMessage(username = "Sam"){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Ayon"))
// console.log(loginUserMessage())//bcz default value is given

function calculateCartPrice(val1,val2,...num1){
      return num1
}

console.log(calculateCartPrice(400,567,789,4566))

const user = {
    username:"Ayon",
    price:200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username :"sam",
    price:499
})

const newArr = [200,300,400,500]

function returnsecondvalue(getArray){
    return getArray[1]
}

//console.log(returnsecondvalue(newArr))
console.log(returnsecondvalue([2,3,4,5]))