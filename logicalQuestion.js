
//  find unique element in array,find duplicate remove, show duplicate
// let arr = [1,2,3,2,1,4,54,5,5]

// let duplicate=[]

// for (let i=0;i<arr.length;i++){
//     let count =0
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//           count++
//         }
//     }
//     if(count==1){
//         duplicate.push(arr[i])
//     }
  
    
// }
//   console.log(duplicate)
//   o/p=[ 3, 2, 1, 4, 54, 5 ]
//   o/p = [3,4,54]
//   o/p = [2,1,5]


//  find anagram

// let a="listen"
// let b="silent"

// function ana(a,b){
//     if(a.length!=b.length) return 
//     return a.split('').sort().join('')===b.split('').sort().join('')
// }
// console.log(ana(a,b))



// find unique first element

// let a='swiss'
// let b=''
//     function first(a){
//         for(let i=0;i<a.length;i++){
//             let count=0
//             for (let j=0;j<a.length;j++){
//                 if(a[i]==a[j]){
//                     count++
//                 }
//             }
//             if(count==1){
//                 b+=a[i]
//             }
//         }
//         return b[0]
//     }

//     console.log(first(a))

// o/p = w

// let a='arshad'
// let b=''

// for(let i=a.length-1;i>=0;i--){
//     b+=a[i]
// }
// console.log(b)

// let c= a.split("").reduce((rev,curr)=> curr +rev,"" )
// console.log(c)


// let a= '123'
// let b=0
// for(let i=0;i<a.length;i++){
//    b+= +a[i]

// }
// console.log(b);

let a=[1,2,[3,4],[4,5,[6,8]]]

let c=a.flat(2)
console.log(c);

