// export default function longestConsecutiveSequence(nums: number[]): number {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let sequence = 1;

//   const numSet = new Set(nums);

//   for (const num of numSet) {
//     if (numSet.has(num + 1)) {
//       sequence += 1;
//     }
//   }

//   return sequence;
// }

export default function longestConsecutiveSequence(nums: number[]): number {
  let longestSequence = 0;

  const numSet = new Set(nums);

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}
