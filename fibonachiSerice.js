let num=20;
let a=0;
let b=1;

console.log(a)
console.log(b)

while(num>0){
    let k=a+b;
    console.log(k);
    a=b;
    b=k;
    num--;
}