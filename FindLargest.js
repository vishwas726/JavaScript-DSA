let arr = [8, 3, 4, 2, 434, 3, 3, 2, 1, 90];
let large = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (large < arr[i]) {
        large = arr[i]
    }
}

console.log("the largest Element is : "+ large)