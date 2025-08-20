//   For loop(fixed number of time )
for(let i=0;i<5;i++){
    console.log(i)
}
console.log("hii")
// while loop(when condition ture)

let j=0

while(j<5){
    console.log(j)
    j++
}

//  Do While loop(atlist one time run)

k=0

do {
    console.log(k)
    k++
} while(k>1)


    //  forof loop(directly get values.)

    let w=[1,2,3]

    for(let val of w){
        console.log(val)
    }
 // for in(used to iterate over the keys (property names) of an object.) 

 let person={
    name:'arshad',
    age:24
 }

 for(let key in person){
    console.log(person[key])
 }