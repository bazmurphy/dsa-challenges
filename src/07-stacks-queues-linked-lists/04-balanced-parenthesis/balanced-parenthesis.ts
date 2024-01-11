import Stack from "./stack";

export default function balancedParenthesis(str: string): boolean {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      // push the "(" onto the stack
      stack.push(str[i]);
    } else if (str[i] === ")") {
      // if the stack is empty it means it is not balanced
      if (stack.isEmpty()) {
        return false;
      }
      // pop the "(" off the stack
      stack.pop();
    }
  }

  // in this case every "(" that was pushed onto the stack
  // has been matched with a ")" which pops the "(" off the stack
  return stack.isEmpty();
}
