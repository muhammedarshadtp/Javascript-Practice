
//           1. Write a function to reverse a string without using built-in reverse().

// let a = 'arshad'

// function reverce(n) {
//     let b = ''
//     for (let i = a.length - 1; i >= 0; i--) {
//         b += a[i]
//     }
//     return b

// }
// console.log(reverce(a));  // o/p =. dahsra

//             2. Write a function to check if a string is a palindrome

// let a='malayalam'

// let arr1=0
// let arr2=a.length-1
// let palindrome =false

// while(arr1 < arr2){
//     if(a[arr1]==a[arr2]){
//         palindrome=true

//     }

//     arr1++
//     arr2--
// }
// console.log(palindrome) // o/p. = true

//           3. Given an array of numbers, return the second largest number

// let a=[1,3,2,5,6,8,9]

//1. let b= a.sort()
// console.log(b.length-1)


//2. for(let i=0;i<a.length;i++){
//     for(j=i;j<a.length;j++){
//         if(a[i]>a[j]){
//           let temp = a[i]
//           a[i]=a[j]
//           a[j]=temp 
//         }

//     }



// }
// console.log(a[a.length-2]);

//3. let first = -Infinity
//  let second = -Infinity

//  for(let num of a){
//     if (num > first){
//         second = first
//         first = num
//     }else if (num > second && num < first){
//         second=num

//     }
//  }

//  console.log(second);


//       4.Remove duplicate values from an array without using Set

// let a=[1,2,1,3,4,5,3,6]

//1. for(let i=0;i<a.length;i++){
//     let count=0
//     for(let j=i;j<a.length;j++){
//         if(a[i]==a[j]){
//             count++
//         }

//     }
//     if(count==1){
//         console.log(a[i])
//     }
// }

//2. for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]===a[j]){
//            a.splice(j,1)
//            j--
//         }


//     }

// }

// console.log(a)


//       5.Flatten this array:

// let a= [1, [2, [3, [4, 5]]]]
// console.log(a.flat(Infinity));


//        6.Write a function to find the factorial of a number using recursion.


// function fact(a){
//     if(a<0) return 0
//     if(a===0 || a===1){
//         return 1
//     }
//     return a* fact(a-1)

// }
// console.log(fact(5))

//      7.Write a program to count the occurrence of each character in a string.

// let a='arshad'
// let obj={}

// for(let char of a){
//     obj[char]=(obj[char] || 0) +1
// }
// console.log(obj)

//          8.Write a function that checks whether two strings are anagrams

// let a = 'silent'
// let b = 'listen'

// // let c=a.split('').sort().join('') == b.split('').sort().join('')

// // console.log(c)

// function anaga(a, b) {
//     if (a.length != b.length) return false
//     let obj = {}
//     let obj1 = {}
//     for (let char of a) {
//         obj[char] = (obj[char] || 0) + 1
//     }
//     for (let char of b) {
//         obj1[char] = (obj1[char] || 0) + 1
//     }
//     let key1=Object.keys(obj)
//     let key2=Object.keys(obj1)

//     if(key1.length !== key2.length) return false

//     for(let key of key1){
//         if(obj[key] !== obj1[key]){
//             return false
//         }
//     }
//     return true

// }

// console.log(anaga(a, b))

//     9. Write a function to find the missing number in an array from 1 to n


// function missing(arr,n){
//     let result=[]
//     arr.sort((a,b)=> a-b)
//     for(let i=1;i<=n;i++){
//         if(!arr.includes(i)){
//             result.push(i)

//         }
//     }
//    return result
// }


// let arr=[1,3,6,4,8,9]

// console.log(missing(arr,9))


//      10.Write a function to sort an array of numbers without using sort().

// let arr = [3, 2, 1, 5, 8, 2]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1;j< arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr)


//        
// const obj = {
//   name: "Arshad",
//   arrow: () => console.log(this.name),
//   normal: function() { console.log(this.name); }
// };

// obj.arrow();   // ? undefined
// obj.normal();  // ? Arshad

// for (var i = 0; i < 3; i++) {
//   setTimeout((i) => console.log(i), 1000,i);
// }

// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// console.log("end");


// Reverse a string
// let a='arshad'
// let b=''

// for(let i=a.length-1;i>=0;i--){
//     b+=a[i]
// }
// console.log(b)

// Palindrome check
// let a='malayalam'
// let left=0
// let right=a.length-1
// let palindrome=true
// while(left < right){
//     if (a[left]!=a[right]){
//         palindrome=false
//         break;
//     }
//     left++
//         right--
// }
// console.log(palindrome)

// Find the second largest number in an array
// let a=[1,4,8,3,6]
// let b=a.sort()
// console.log(b[b.length-2])


// Remove duplicates from an array

// let a=[1,2,3,2,5,6,1]

// for(let i=0;i<a.length;i++){

//     for(let j=i+1;j<a.length;j++){
//         if(a[i]==a[j]){
//             a.splice(j,1)
//         }
//     } 
// }
// console.log(a)

// Flatten nested arrays

// let a=[1,2,[3,4,[5,6,[7,8]]]]
// let b= a.flat(Infinity)
// console.log(b)

// Factorial (recursion)

// function fact(a){
//     if(a<=1) return 1
//     return a* fact(a-1)
// }
// console.log(fact(5))


// 7. Count character occurrences in a string

// function occu(a){
//     let obj={}
//     for(let word of a){
//         obj[word]=(obj[word]|| 0)+1
//     }
//     return obj
// }
// let arr='slincnes'
// console.log(occu(arr))

// 8. Check if two strings are anagrams
// let a = 'silent'
// let b = 'listen'

// function anagram(a, b) {
//     if(a.length != b.length) return false
//     let obj1 = {}
   
//     for (let word of a) {
//         obj1[word] = (obj1[word] || 0) + 1
//     }
//     for (let word of b) {
//         if(!obj1[word]) return false
//           obj1[word]--
//     }
  
//     // let key1 = Object.keys(obj1)
//     // let key2 = Object.keys(obj2)
//     // if (key1.length != key2.length) return false

//     // for (let words of key1) {
//     //      if(obj1[words] !== obj2[words]){
//     //         return false
//     //      }
//     // }
//     return true
// }
// console.log(anagram(a, b))
// 9. Find the missing number in an array
// function missing(a,b){
//     a.sort((a,b)=> a-b)
//     let result = []
//     for(let i=1;i<=b;i++){
//         if(!a.includes(i)){
//             result.push(i)
//         }
//     }
//     return result
// }
// let arr=[1,3,5,7,9]

// console.log(missing(arr,9))
// 10. Sort array without sort()
// 16. Check if a number is prime
// 17. Fibonacci series


// 
// Find longest word in a sentence
// function longestWord(sentence) {
//     let words = sentence.split(" ");
//     let longest = "";
//     for (let word of words) {
//         if (word.length > longest.length) longest = word;
//     }
//     return longest;
// }

// console.log(longestWord("I love JavaScript programming")); // "programming"

// let str = "hello world from js";

// let b= str.split(" ")
// .map(word=>word[0].toUpperCase() + word.slice(1)).join(' ')
// console.log(b)


// const promise = new Promise((res,rej)=>{
//     if(1>2){
//         res("hii")
//     }else{
//         rej('hello')
//     }
// })
// .then((res)=>{console.log(res)})
// .catch((rej)=>{console.log(rej)})

// const http = require("http")

//  http.createServer((req,res)=>{
//     res.end("Hello World")

// })

// .listen(3001,()=>{console.log("server is running")})


