//for

myarray = [2,3,4,5,"batman"]
for(let index = 0;index < myarray.length;index++){
    const element = myarray[index]
    console.log(element)
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop  value:${i}`)
    for (let j = 0; j <=10; j++) {
        console.log(i +'*'+j +'=' + i*j);  
    }   
}

for (let index = 0; index <=10; index++) {
    
    if(index == 6){
        console.log("Detected 6");
        continue
    }
    console.log(`Value of loop is ${index}`)
}