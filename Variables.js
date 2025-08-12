 
//  using VAR variable
function Hello(){
    if(true){
        var x = 10
        console.log(x)
        // output=10
        
    }
    // console.log(x)
     // output=10
}

Hello()


// using let varible

function example(){
    if(true){
        let count=10
        console.log(count)
        // output=10
    }
    // console.log(count)
    // ReferenceError: count is not defined    
}

example()


// using constvariable

const a=10
console.log(a)

// a=20
// console.log(a)
// TypeError: Assignment to constant variable.