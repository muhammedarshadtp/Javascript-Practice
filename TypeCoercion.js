
// Implicit coercion (done automatically by JavaScript)

console.log('5' + 5) // "52"  (Number 2 → String "2")

console.log('5'-2)  // 3     (String "5" → Number 5)


// Explicit coercion (done manually by you)

console.log(Number('123'))  // 123  (String → Number)

console.log(String(123))    // "123" (Number → String)

console.log(Boolean(0))    // False