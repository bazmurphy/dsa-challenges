// Write a function called `maxSubarraySum`
// that takes an array of integers and a positive integer `k` as input.
// The function should find the maximum sum of any subarray of length `k`
// using an O(n^2) solution (quadratic) by using nested for loops.
// We will re-visit this and use the sliding window technique to use an O(n) solution.

export default function maxSubarraySum(arr: number[], k: number): number {
  // we need to guarantee that the first subArraySum is greater than this:
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length - k; i++) {
    let currentSubArraySum = 0;

    for (let j = i; j < i + k; j++) {
      currentSubArraySum += arr[j];
    }

    if (currentSubArraySum > maxSum) {
      maxSum = currentSubArraySum;
    }
    // an alternative to the ^above:
    // maxSum = Math.max(maxSum, currentSubArraySum);
  }

  return maxSum;
}
