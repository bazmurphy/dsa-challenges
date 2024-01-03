export default function numberRange(
  startNum: number,
  endNum: number,
): number[] {
  // base case
  if (startNum === endNum) {
    return [startNum];
  }

  // recursive case
  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}
