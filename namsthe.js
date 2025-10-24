
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


const radius = [1,3,5,6,8]

const area = function(radius){
    return Math.PI * radius * radius
}

const diemeter = function (radius){
    return 2*radius
}

const Circumference = function (radius){
    return 2 * Math.PI* radius
}

function calculate(radius,logic){
    let count =[]
    for(let i=0;i<radius.length;i++){
        count.push(logic(radius[i]))
    }
    return count
}
console.log(calculate(radius,area));
console.log(calculate(radius,diemeter));
console.log(calculate(radius,Circumference));