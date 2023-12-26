export default function findMissingNumber(arr: number[]): number | undefined {
  if (!arr) {
    return undefined;
  }

  if (arr.length === 0) {
    return 1;
  }

  const sortedArray = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
      return sortedArray[i] + 1;
    }
  }
}
