let num=4

//recursion
const fact = (num) => {
    if (num == 1) return 1;
    return fact(num - 1) * num;
}

console.log("factorial : " + fact(num))

// Loop
let factNum = 1;
for (let i = 1; i <= num; i++) {
    factNum = factNum * i;

}

console.log("factorial : " + factNum)


