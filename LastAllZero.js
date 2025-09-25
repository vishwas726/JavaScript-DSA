let arr = [2, 5, 6, 30, 9, 0, 0, 0, 2, 0, 4, 6, 0, 6, 4, 5, 6, 0, 9, 0, 0, 7, 6, 4, 3]

let j = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] != 0) {

        arr[j] = arr[i]
        j++;

    }
}

while(j!=arr.length){
    arr[j]=0;
    j++;
}

console.log(arr)