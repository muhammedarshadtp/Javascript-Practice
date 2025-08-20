// Reverse String
function stringReverse(a){
    let reversed=""

    for(i=a.length-1;i>=0;i--){
        reversed+=a[i]
    }
    return reversed
}

console.log(stringReverse("arshad"));

// Longest Word

function LongestWord(srt){
    let a=srt.split(" ")
    let b=""
    for(let word of a){
        if(word.length > b.length){
            b=word
        }
    }
    return b
}
console.log(LongestWord("i love coding"));
