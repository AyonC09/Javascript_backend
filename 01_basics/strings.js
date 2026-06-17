const name = "Ayon"
const repoCount = 90

//console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('ayon,ch,com')

console.log(gameName.__proto__)


console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,4)//last index value is not taken
console.log(newString);

const anotherString = gameName.slice(-7,-3)//last index not included
console.log(anotherString)

const newStringOne = "    Ayon   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://https://262.ecma-international.org/5.1/#sec-11.4.3"

console.log(url.replace('2.ecma','7.mdn'))
console.log(gameName.split('-'))

const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
// valueOf() returns the primitive value of the function

const y = "Hello"
console.log(y.concat("! ","Ayon"))
