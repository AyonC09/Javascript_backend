const myArr = [0,1,2,3,4,5]
const myHeros = ['batman','superman','thor','Hulk']
console.log(myHeros.push('DonaldTrump'))
console.log(myHeros.pop())//pops last element from the array
console.log(myHeros)

// myArr.unshift(7)//pushes the no. at start of the array
// myArr.shift()//Removes the 1st element of the array

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(3))


// const newArr = myArr.join('-')
// console.log(newArr)
// console.log(typeof newArr)//converts the array into string


//SLICE , SPLICE
//1- about the range
//2- slice doesn't change the whole array but splice changes the whole array
console.log("A",myArr)

const myn1 = myArr.slice(1,3)
console.log("B",myArr)
console.log(myn1)

const myn2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)