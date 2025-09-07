let str="my name is vishwas";

let arr=str.split(" ");

arr=arr.map((word)=> word[0].toUpperCase() + word.slice(1));

let newStr=arr.join(" ")

console.log(newStr)


