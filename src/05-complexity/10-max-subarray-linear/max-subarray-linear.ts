// export default function maxSubarraySum(arr: number[], k: number): number {
//   let maxSum = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i <= arr.length - k; i++) {
//     const currentWindow = arr.slice(i, i + k);

//     const windowSum = currentWindow.reduce(
//       (total, current) => (total += current),
//       0,
//     );

//     if (windowSum > maxSum) {
//       maxSum = windowSum;
//     }
//   }

//   return maxSum;
// }

// export default function maxSubarraySum(arr: number[], k: number): number {
//   let maxSum = 0;
//   let currentSum = 0;

//   for (let i = 0; i < k; i++) {
//     maxSum += arr[i];
//   }

//   currentSum = maxSum;

//   for (let i = 1; i <= arr.length - k; i++) {
//     // console.log("1A REMOVE arr[i - 1]:", arr[i - 1]);
//     // currentSum -= arr[i - 1];
//     // console.log("1B currentSum:", currentSum);

//     // console.log("2A ADD arr[i + k - 1]:", arr[i + k - 1]);
//     // currentSum += arr[i + k - 1];
//     // console.log("2B currentSum:", currentSum);

//     currentSum = currentSum - arr[i - 1] + arr[i + k - 1];

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }

//   return maxSum;
// }

export default function maxSubarraySum(arr: number[], k: number): number {
  let currentSum = 0;
  let maxSum = 0;

  // give the maxSum an initial value from the initial window
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  // set the currentSum to the maxSum
  currentSum = maxSum;

  // slide the window and calculate the maximum for each window
  for (let i = k; i < arr.length; i++) {
    // update the currentSum by
    // subtracting the element that exited the window
    // and adding the new element that entered the window
    currentSum = currentSum - arr[i - k] + arr[i];

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// .slice() creates a new array - more space complexity
// .reduce() needs to loop through the new array - more time complexity

// (!!!) Math.max() is more efficient than an IF comparison
