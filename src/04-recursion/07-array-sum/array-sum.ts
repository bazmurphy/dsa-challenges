export default function arraySum(arr: number[]): number {
  // base case
  if (arr.length === 0) {
    return 0;
  }

  // recursive case
  return arr[0] + arraySum(arr.slice(1));
}
