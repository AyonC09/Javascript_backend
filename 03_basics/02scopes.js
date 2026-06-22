let a = 300
//var c =80
if(true){
let a = 10
const b = 20
//var c = 30
//console.log("INNER:",a);
}
//console.log(a)
//console.log(b)
//console.log(c)// (var c) 30 is showing the output of it's scope


function one(){
    const username = "ayon"

    function two(){
        const website = "youtube"
        console.log(username)
    }
   // console.log(website);

    two()
}

//one()

if(true){
    const username = "ayon"
    if(username === "ayon"){
        const website = "youtube"
        console.log(username + website)
    }
   // console.log(website)
}

//console.log(username)



// ++++++++++++++++interesting+++++++++++++++++++++

console.log(addone(7))
function addone(num){
    return num + 1
}



//console.log(addTwo(7))// error occurs bcz declaration is after the print
const addTwo = function(num){
    return num + 2
}

