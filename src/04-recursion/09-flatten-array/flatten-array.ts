export default function flattenArray(arr: Array<number | number[]>): number[] {
  // the structure of this is very different from the previous challenges
  // the base case is implicitly handled within the loop structure :
  // as the loop iterates through each element of the input array...
  // the recursion eventually reaches the point where there are no more elements left to process...
  // when the input array is empty the loop won't execute...
  // and the function will directly return the empty result array

  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i] as number[]));
    } else {
      result.push(arr[i] as number);
    }
  }

  return result;
}
