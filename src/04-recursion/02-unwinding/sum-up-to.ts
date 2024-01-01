export default function sumUpTo(n: number): number {
  // base case
  if (n === 1) {
    console.log(`sumUpTo(${n}) returns 1`);
    return 1;
  }

  // recursive case
  console.log(`sumUpTo(${n}) calls sumUpTo(${n - 1}) + ${n}`);
  return n + sumUpTo(n - 1);
}
