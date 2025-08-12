
// copying an array

let a=[1,2,3,4,5]

console.log(...a)

// Merging an array

let a1=[1,2,3]
let a2=[6,7,8,9]

let a3=[...a1,...a2]
console.log(a3)

// massing multiple argument in function


const number=[1,2,3,4,5]

sum(...number)

function sum(a,s,d,f,g,){
    console.log(a+s+d+f+g)
}