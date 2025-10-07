let num=17;
let prime=true;

for(let i=2;i<num;i++){

    if(num%i==0){
        prime=false;
        break;
    }
}

console.log("the number is : " + `${prime ? "prime" : "not prime "}`)