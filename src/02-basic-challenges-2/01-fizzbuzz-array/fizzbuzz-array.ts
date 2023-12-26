export default function fizzBuzzArray(num: number): (string | number)[] {
  const output = [];

  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      output.push("FizzBuzz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else {
      output.push(i);
    }
  }

  return output;
}
