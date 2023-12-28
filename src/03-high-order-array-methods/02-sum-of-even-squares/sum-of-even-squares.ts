export default function sumOfEvenSquares(numbers: number[]): number {
  return numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * number)
    .reduce((acc, cv) => acc + cv, 0);
}
