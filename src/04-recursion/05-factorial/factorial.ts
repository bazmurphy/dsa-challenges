export default function factorial(num: number): number {
  // base case
  if (num <= 1) {
    return 1;
  }

  // recursive case
  return num * factorial(num - 1);
}
