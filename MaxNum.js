const arr = [2, 3, 4, 5, 6, 3, 2, 4, 5, 2, 46, 32, 5, 324, 23, 44, 6, 5];

const maxNum = arr.reduce((acc, cur) => {

    if (acc < cur) {
        acc = cur;
    }
    
    return acc;
}, 0)

console.log("Max Num is : ", maxNum)