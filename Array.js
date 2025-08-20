
// indexOf

const array=[1,2,3,4,5,6]

const arr=array.indexOf(4)
console.log(arr)


// Different between Find,filter

// find Method

let arr1=[1,2,3,4,5,6]

const a=arr1.find((num)=>
    num%2==0
)
console.log(a)

// FilterMethod

let arr2=[1,2,3,4,5,6]

const b= arr2.filter((num)=>
    num%2==0
)
console.log(b)

// SliceMethod (start index to end index but (end not includes))

const slice=['a','b','c','d','e','d']

let slice1=slice.slice(1,4)
console.log(slice1)

// push,unshift and concat(This three are add an element in an array)

// push(insert last )
let q=[1,2]
q.push(3,5)
console.log(q)

// unshift(insert first)
let m=[3,4]
m.unshift(1,2)
console.log(m)

// concat(give new array)

let s= [1,2]
let co=s.concat(3,4)
console.log(co)


// pop and shift

// pop
let w=[1,2,3,4]
w.pop()
console.log(w)

// shift

let e=[1,2,3,4]
e.shift()
console.log(e);


// different between splice and slice

// splice(add,remove or replace)

let letter=['a','b','c','d','e']
letter.splice(5,0,'w',)
console.log(letter)
letter.splice(2,2)
console.log(letter)
letter.splice(0,1,'A')
console.log(letter)


// Slice( A new array with the selected elements.)

let array1=[1,2,3,4,5]

let as1=array1.slice(1,3)

console.log(as1)

// Different between map and foreach

// map(it's give an new array)
const ar=[1,2,3]

let maparray=ar.map((e)=>e*2)
console.log(maparray) //output=[ 2, 4, 6 ]

// foreach(it's without creating a new array)

const forea=[1,2,3]
forea.forEach((e)=>{
    console.log(e*2 )
})

// sort and reverse

let sort=[4,5,1,3,7,1]
sort.sort()
sort.reverse()
console.log(sort)



