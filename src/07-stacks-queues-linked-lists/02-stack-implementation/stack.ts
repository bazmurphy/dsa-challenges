export default class Stack {
  public maxSize: number;
  public stack: unknown[];
  public top: number;

  constructor() {
    // the maximum size of the stack
    this.maxSize = 100;
    // the stack itself where we store the data
    this.stack = [];
    // when you add an item to the stack it will have an index of 0
    // so we start with -1 because that is less than 0
    this.top = -1;
  }

  // push an item on to the stack
  push(value: unknown): boolean {
    // check if the stack is full before we add it to the stack
    if (this.isFull()) {
      return false;
    }

    // increment the top, so the first item we push on will be 0
    this.top += 1;
    // set that index to the value
    this.stack[this.top] = value;
    return true;
  }

  // pop an item off the stack
  pop() {
    // check if the stack is empty before removing from the stack
    if (this.isEmpty()) {
      return null;
    }

    // returning the value but not editing the stack
    // const valueToReturn = this.stack[this.top];
    // this.top -= 1;
    // return valueToReturn;

    // using the built in JavaScript Array pop method
    // return this.stack.pop();

    const valueToReturn = this.stack[this.top];
    this.top -= 1;
    // truncate the stack array by setting the length
    this.stack.length = this.top + 1;
    return valueToReturn;
  }

  // peek at the item at the top of the stack
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack[this.top];
  }

  // check if the stack is full
  isFull(): boolean {
    return this.top === this.maxSize - 1;
  }

  // check if the stack is empty
  isEmpty(): boolean {
    return this.top === -1;
  }
}

// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack);
// // Stack { maxSize: 100, stack: [ 1, 2, 3 ], top: 2 }

// console.log(stack.pop());
// // 3
// console.log(stack);
// // Stack { maxSize: 100, stack: [ 1, 2 ], top: 1 }

// console.log(stack.peek());
// // 2
