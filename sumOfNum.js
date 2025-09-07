let arr = [1, 6, 2, 6, 1, 5, 3, 4, 7, 8, 9, 0, 44, 55, 33, 99];

let sumPairs = [];

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (!(sumPairs.includes(`${arr[i]} , ${arr[j]}`) || sumPairs.includes(`${arr[j]} , ${arr[i]}`))) {

            if (arr[i] + arr[j] == 7) {

                sumPairs.push(`${arr[i]} , ${arr[j]}`);

            }
        }

    }
}

console.log(sumPairs.map((pair)=>pair.split(",").map((num)=>Number(num))))
