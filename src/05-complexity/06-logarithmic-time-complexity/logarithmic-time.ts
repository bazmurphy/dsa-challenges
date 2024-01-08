// Logarithmic Time (O(log n))
// Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set.

export default function findPower(base: number, exponent: number): number {
  // base case
  if (exponent === 0) {
    return 1;
  }

  // any number that can be raised by an even exponent can be split into two halves
  // and the result is the square of the number raised to half the exponent

  // recursive case
  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
}
