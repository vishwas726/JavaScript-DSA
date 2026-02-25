
//Input :  My name is Vishwas
// Output : sa whsi Vs iemanMy

let str="My name is vishwas"

let j=str.length-1;
let newStr=""

for(let i=0;i<str.length;i++){
  
   if(str[j]==" "){
       j--;
   }
   
   if(str[i]==" "){
       newStr=newStr + " "
   }else{
       newStr=newStr+ str[j]
       j--
   }
    
}

console.log(newStr)



