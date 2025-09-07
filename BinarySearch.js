let arr = [10, 20, 50, 70, 100, 160, 190]

let target = 20;

let last = arr.length - 1;
let first = 0;

let foundIndex = -1;

for (let i = 0; i < arr.length; i++) {

    let mid = (first + last) / 2;

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