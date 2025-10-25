
// // var a=2

// // function num (n){
// //     var ans = n*2 
// //    return ans

// // }

// // var squre1 = num(a)
// // var squre2 = num(4)
// // console.log(squre1);
// // console.log(squre2)



// a()

// var c=10
// function a(){
//     console.log(name , 'name in top of a func');
// var name = 2
//     function b(){  
//         var name = 'james'
//         console.log(name,'name in b');
//         function child(){
//             console.log(c);
//             console.log(name,'name in child');
//             var name = 'hey'
//             var name = 'lol'
//         }
//         child()
//     }
//     console.log(name,'name a ');
//     b()
// }


// var a=10
// {
//     var a=100
//     let b= 200
//     const c=300
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// console.log(a);
//     console.log(b);
//     console.log(c);

// var x = 10 ;
// {
//     let x = 20;
//     {
//         // console.log(x) // 20 
//         let x = 30;
//         {
//             let x = 20
//             console.log(x,"20")
//         }
//         console.log(x) //30
//     }

// }
// console.log(x,"10")

// function a(){
//     var i=3
//     setTimeout(function (){
//         console.log(i);


//     },2000)
//     console.log("Hello Arshad");

// }
// a()


// function b
//     () {

//     for (var i = 1; i <= 5; i++) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 2000)



//     }
//     console.log("Hello Arshad");


// }

// b()


// function a() {

//     function b() {
//         console.log(x, "20");
//         function c() {
//             console.log(x, "200");
//         }
//         c()
//     }
//      b()
// }
// var x = 10;
// a()

// constracter

// function Counter(){
//     count=0
//     this.incrementCounter= function(){
//         count++
//         console.log(count);

//     }
//     this.decrementCounter = function(){
//         count--
//         console.log(count);

//     }
// }

// var counter1= new Counter()
// counter1.incrementCounter()
// counter1.incrementCounter()
// counter1.incrementCounter()
// counter1.decrementCounter()



//    Function statement also know as function declaration
// a()
// function a(){
//     console.log("hello");

// }


//  function Expresstion

// let fun = function(){
//     console.log("Hiii");
// }
// fun()

//  Anonymous function

//  function (){

//   }

// 🔸 An anonymous function is simply a function without a name.
// 🔸 Commonly used as callbacks or inside function expressions.
// 🔸 It’s not hoisted (unlike named functions).
// 🔸 You can write them with the function keyword or with the => (arrow function) syntax.


//   Named function expression

// let named = function wer(){
//     console.log("Named");
// }
// named()



// Different between parameter and argument 

// function para(a){ // this is parameter
//     console.log(a);
// }
// para(10) // this is an argument


//  First class function. 

// First-class function means JavaScript treats functions as normal values —
// you can assign, pass, return, and store them like any other data.


// CallBack function


// setTimeout(function (){
//     console.log("timer");
// },2000)

// function x(y){
//     console.log("x");
//     y()
// }
// x(function y(){
//     console.log("y");
// })

// function a(){
//     console.log("haiii");
// }
// a()
// console.log("hello");

// console.log("start");

// setTimeout( function (){
//     console.log("time outer");
// },2000)

// console.log("end");

// console.log("Start");

// setTimeout( function(){
//     console.log("callBack");
// },5000)

// console.log("end");

// let start = new Date().getTime()
// let end =  start

// while(end < start + 10000){
//     end = new Date().getTime()

// }

// console.log("bottam");


// const radius = [1,3,5,6,8]

// const area = function(radius){
//     return Math.PI * radius * radius
// }

// const diemeter = function (radius){
//     return 2*radius
// }

// const Circumference = function (radius){
//     return 2 * Math.PI* radius
// }

// function calculate(radius,logic){
//     let count =[]
//     for(let i=0;i<radius.length;i++){
//         count.push(logic(radius[i]))
//     }
//     return count
// }
// console.log(calculate(radius,area));
// console.log(calculate(radius,diemeter));
// console.log(calculate(radius,Circumference));


// MAP

//    Think of map() like a machine that takes each item from an array,
//  transforms it, and gives you a new array with the transformed values.



// const arr = [1,2,3,4,5,6,7,8]

// const arr1 = arr.map((a)=> a.toString(2))

// console.log(arr1);  //.  number -> binary

// const bin = ["100","101","110","111","1000"]

// const arr2 = bin.map((b)=> parseInt(b,2))

// console.log(arr2); // Binary -> number


// const arr =[1,2,3,4,5,6]

// const arr1 = arr.filter(a=> a%2 === 0 )

// console.log(arr1);

// const users = [
//   { name: "Arshad", age: 22 },
//   { name: "Ali", age: 25 },
//   { name: "Sara", age: 21 },
//   { name: "John", age: 30 }
// ];

// const userName= users.filter(a=> a.age >23).map(a => a.name)
// console.log(userName);

// const userName = users.reduce((acc,curr)=>{
//     return acc.age > curr.age ? acc:curr
// },0)
// console.log(userName);


//            Promise

//. promise is an object its representing  the eventual completion  of failure of an asynchronus opreation.

// var age = 20;

// const promise = new Promise((res,rej)=>{
//     console.log("1");
//     setTimeout(()=>{
//         res('success')
//     },3000)
//     console.log("2");
// })
// setTimeout(()=>{
//     console.log(this.age,'age');
// })
// setTimeout(function (){
//     console.log(this.age,'inside func');
// })
// promise.then(data=>console.log(data))
// promise.catch(error =>console.log(error))

// const cart =["shoes","laptop","phone"]

// const promise = createCart(cart)

// promise.then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// });

// function createCart(cart){

//  const pr = new Promise((resole,reject)=>{

//     if(!validateCart(cart)){
//         const err = new Error("cart is not valid")
//         reject(err)
//     }
//     const orderId='12345'
//     if(orderId){
//         setTimeout(()=>{
//             resole(orderId)
//         },2000)
//     }

// })
// return pr
// }

// function validateCart(){
//     return true
// }









//                *Promise.All (Waits for all promises to succeed)

// const p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{res("p1 success")},2000)
// })

// const p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{res("p2 success")},3000)
// })

// const p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{res("p3 success")},3000)
// })



// Promise.all([p1,p2,p3])
// .then(data=>console.log(data))
// .catch(err => console.error(err))

//                outputs => [ 'p1 success', 'p2 success', 'p3 success' ]


//               *Promise.settled(Waits for all promises to finish — regardless of success or failure.)

// const p1 = new Promise((res,rej)=>{
//     setTimeout(()=>rej("p1 seccuss"),2000)
// })
// const p2 = new Promise((res,rej)=>{
//     setTimeout(()=>res("p2 seccuss"),3000)
// })
// const p3 = new Promise((res,rej)=>{
//     setTimeout(()=>res("p3 seccuss"),1000)
// })

// Promise.allSettled([p1,p2,p3])
// .then(data=>console.log(data))
// .catch(err => console.error(err))

//      outputs=> [
//   { status: 'rejected', reason: 'p1 seccuss' },
//   { status: 'fulfilled', value: 'p2 seccuss' },
//   { status: 'fulfilled', value: 'p3 seccuss' }
// ]

//                 *Promise.race(Returns the first promise that settles (either resolves or rejects))

// const p1 = new Promise((res,rej)=>{
//     setTimeout(res,2000,"p1 seccuss")
// })
// const p2 = new Promise((res,rej)=>{
//     setTimeout(res,3000,"p2 seccuss")
// })
// const p3 = new Promise((res,rej)=>{
//     setTimeout(rej,1000,"p3 reject")
// })

// Promise.race([p1,p2,p3])
// .then(data => console.log(data)) //. p3 seccuss
// .catch(err=> console.error(err)) //. p3 reject



//              *Promice.any (Returns the first promise that resolves (ignores rejections).)


// const p1 = new Promise((re,rej)=>{
//     setTimeout(res,300,"p1 success")
// })
// const p2 = new Promise((res,rej)=>{
//     setTimeout(rej,200," p2 reject")
// })
// const p3 = new Promise((res,rej)=>{
//     setTimeout(res,100,"p3 success")
// })

// Promise.any([p1,p2,p3])
// .then(data => console.log(data))
// .catch(err=>console.log(err))

//      OutPut => p3 success