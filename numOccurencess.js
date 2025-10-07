const arr = [2, 2, 3, 4, 5, 6, 6, 6, 6, 4, 3, 2, 0, 7];

const obj = arr.reduce((acc, curr) => {

    if (acc[curr]) {

        acc[curr] = acc[curr] + 1;

    } else {

        acc[curr] = 1;
    }

    return acc;

}, {});

console.log(obj)
