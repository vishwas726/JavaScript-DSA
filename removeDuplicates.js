let arr = [1, 2, 2, 3, 4, 4]

let map = new Map();

for (let i = 0; i < arr.length; i++) {

    if (map.has(arr[i])) {

        arr.splice(i, 1);

    } else {

        map.set(arr[i], true);

    }

}

console.log(arr)