//for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }

// const greeting = "Hello world!"
// for (const value of greeting) {
//     console.log(`Each char is ${value}`)
// }

//Maps

const map = new Map()
map.set('IN','India')
map.set('UK',"United Kingdom")
map.set('US',"United States of America")

console.log(map)

for (const [key,value] of map) {
    console.log(key," : ",value)
}



// for (const key in map) {
//     console.log(key)
// } //map not iteratable 

const myObj = {
    'game1':"NFS",
    'game2':"GTA",
    'game3':"Counter Strike"
}
//Objects are not iteratable by for of
// for (const value of myObj) {
//     console.log(Object.keys(value))
// }

for (const key in myObj) {
    //console.log(key)
    const element = myObj[key];
    console.log(key," : ",element)
    
}

const myArr = ["JS","RUBY","C++","PYTHON"]
for (const key in myArr) {
    
    console.log(myArr[key])  
}