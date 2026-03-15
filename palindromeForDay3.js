function palindrome(str){
    let reversed = ''
for(let i = 0;i < str.length;i++){
    str1 = str[i]
    reversed = str1 + reversed
}
if(reversed !== str){
    return false
}else{
    return true
}
}
console.log(palindrome('racecar'));   //true

console.log(palindrome('hello'));      //false
