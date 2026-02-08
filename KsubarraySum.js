// sliding window

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

k = 3; //suarray size
targetSum = 6;

let sum = 0;
for (let i = 0; i < k; i++) {
  sum = sum + arr[i];
}

let left = 0;
let right = k - 1;

while (right < arr.length) {
  console.log(sum);
  if (targetSum == sum) {
    console.log(arr[left], arr[right]); //number range
    console.log("Subarray found:", arr.slice(left, right + 1));
    break;
  }

  sum = sum - arr[left];

  left++;
  right++;

  // only add if right is still inside array
  if(right < arr.length){
      sum = sum + arr[right];
  }
}




for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum=0;
      for (let k = i; k <= j; k++) {
          sum=sum+arr[k]
    }
      if(sum==targetSum){
         console.log(arr[i] , arr[j])
         console.log("Subarray found 2:", arr.slice(left, right + 1));
        break

      }
    }
  }