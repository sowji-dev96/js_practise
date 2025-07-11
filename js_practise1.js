const reverStr = (str) => {
   return str.split("").reverse().join("")
}

console.log(reverStr("BenAndSowji"));


const isPalindrome  = (str)=> {
    return str.split("").reverse().join("") === str
}


console.log(isPalindrome("wow"))

console.log(isPalindrome("sowji"))

