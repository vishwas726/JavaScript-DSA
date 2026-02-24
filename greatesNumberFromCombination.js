// Given an array of numbers, arrange them such that they form the largest possible number.

// Example:

// Input:  [3, 30, 34, 5, 9]
// Output: "9534330"

const find = (nums)=>{
  
    let arr = nums.map((val)=>{
         return val.toString();
    })   
    
    sort(arr);
    
    return arr.join("")
    
  }
  
  
const sort =(arr)=>{
      
   for(let i=0;i<arr.length;i++){
   
     for(let j=i+1;j<arr.length;j++){     
          //20 9
         if(Number(arr[i] + arr[j])  < Number(arr[j] + arr[i])){
                
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
         }
       
      }
   
  }

}
  
  
console.log(find([20 , 9 ,94 , 92 , 3,5]))
  