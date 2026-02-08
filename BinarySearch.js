let arr = [10, 20, 50, 70, 100, 160, 190]

let target = 2900;

let last = arr.length - 1;
let first = 0;

let foundIndex = -1;

while (first <= last) {

    let mid = Math.floor((first + last) / 2);

    if (arr[mid] == target) {

        // console.log(mid)
        foundIndex = mid;
        break;

    } else if (arr[mid] > target) {

        last = mid - 1;


    } else {

        first = mid + 1;

    }

}

console.log(foundIndex)
a=1/2
console.log(a)