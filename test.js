let name="vishwas";

const printName =()=>{
     name="landge"  
     console.log("inner : ",name)
}

console.log("outer : ",name)
printName()
console.log("outer : ",name)
