const user = {
    username:"ayon",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}
// this current context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)// refering to empty object {}

// function chai(){
//     let username = "Ayon"
//     console.log(this.username)
// }// it doesn't show anything

//chai()


const chai = () => {
    let username = "ayon"
    console.log(this)
}

//chai()

//const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"Ayon"})
console.log(addTwo(3,4))