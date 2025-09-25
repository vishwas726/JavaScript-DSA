let num = 202;
let temp = num;

let revNum = 0;

while (temp > 0) {
    last = temp % 10;
    // console.log(last) 
    revNum = (revNum * 10) + last;
    // temp=(temp/10) | 0  //using bitwise to truncate decemal num
    temp = Math.floor(temp / 10)
}

console.log("This is reverse Num : ", revNum)

console.log(`the number ${num} is ${revNum == num ? "pallidrome" : "not pallidrome"}`)
