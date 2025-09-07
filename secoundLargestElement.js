let arr=[4,2,4,2,2,7,8,9,6,44,4,9,99,54,4,3]

let first=arr[0];
let secound=arr[0];

for(let i=1;i<arr.length;i++){

    if(first < arr[i]){
        secound=first; 
        first=arr[i];
    }else if(secound<arr[i]){            
        secound=arr[i];
    }

}

console.log("first greatest : ", first)
console.log("secound greatest : ", secound)

