import Stack from "./stack";

export default function reverseStringStack(str: string): string {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reverseString = "";

  while (!stack.isEmpty()) {
    reverseString += stack.pop();
  }

  return reverseString;
}
