
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


function a() {
    var a = 10;
    function b() {
        console.log(a, "20");
        function c() {
            console.log(a, "200");
        }
        c()
    }
     b()
}

a()