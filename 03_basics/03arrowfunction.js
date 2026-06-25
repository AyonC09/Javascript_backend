const user = {
    username:"ayon",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}
// this refers to the current object

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)// refering to empty object {}

function chai1(){
    let username = "Ayon"
    console.log(this)
}// it points to the standalone global object

chai1()


const chai = () => {
    let username = "ayon"
    console.log(this)
}

chai()

// //const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"Ayon"})
console.log(addTwo(3,4))