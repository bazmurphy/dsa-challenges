export default function fibonacci(num: number): number {
  // base case
  if (num <= 1) {
    return num;
  }

  // recursive case
  // Fibonacci: F(n) = F(n-1) + F(n-2)
  return fibonacci(num - 1) + fibonacci(num - 2);
}
