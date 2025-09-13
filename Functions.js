// // Normal function

// function sum(a, b) {
//     return a + b
// }
// console.log(sum(4, 3))

// // Anonymous function

// console.log(function (a, b) {
//     return a * b
// }(4, 5))

// // function expression

// let add = function (a, b) {
//     return a * b
// }

// console.log(add(4, 5));

// // Arrow Function

// let arrow = (a, b) => a * b
// console.log(arrow(2, 3))


// // callback function

// function sum(a, b) {
//     return a * b
// }
// sum(2, 3)
// function sum2(a, b, cb) {
//     let m = cb(a, b)
//     console.log(m)
// }
// sum2(10, 5, sum)



// // pure and impure function

// // pure(same output)
// function sum(a, b) {
//     return a + b
// }
// sum(2, 3)


// // impure (not same output)

// let total = 0

// function impure(value) {
//     total += value
//     return total
// }
// console.log(impure(5));
// console.log(impure(5));

// // currying

// function curry(a) {
//     return function (b) {
//         return a * b
//     }
// }
// let double = curry(2)
// console.log(double(3))

// // closure
// function a() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x)

//             },x* 1000)
//         }
//         close(i)
//     }
//     console.log("hello arshad")
// }
// a()


// const counterIIFE = (function () {
//   let count = 0; // private
//   return function () {
//     return ++count;
//   };
// })();
// console.log(counterIIFE()); // 1
// console.log(counterIIFE()); // 2
// console.log(counterIIFE()); // 3

