export default function power(base: number, exponent: number): number {
  // base case
  if (exponent === 0) {
    return 1;
  }

  // recursive case
  return base * power(base, exponent - 1);
}
