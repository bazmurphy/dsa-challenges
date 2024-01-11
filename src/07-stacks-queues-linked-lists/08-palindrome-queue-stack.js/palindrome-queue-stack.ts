import Queue from "./queue";
import Stack from "./stack";

export default function isPalindromeQueueStack(str: string): boolean {
  const sanitised = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const queue = new Queue();
  const stack = new Stack();

  for (let i = 0; i < sanitised.length; i++) {
    queue.enqueue(sanitised[i]);
    stack.push(sanitised[i]);
  }

  // let queueString = "";
  // let stackString = "";

  // while (!queue.isEmpty()) {
  //   queueString += queue.dequeue();
  // }
  // while (!stack.isEmpty()) {
  //   stackString += stack.pop();
  // }

  // return queueString === stackString;

  while (!queue.isEmpty()) {
    if (queue.dequeue() != stack.pop()) {
      return false;
    }
  }

  return true;
}
