import Queue from "./queue";

export default function reverseStringQueue(str: string): string {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  let reverseString = "";

  while (!queue.isEmpty()) {
    reverseString += queue.dequeue();
  }

  return reverseString;
}
