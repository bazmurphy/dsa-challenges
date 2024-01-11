export default class Queue {
  // a queue is a First In First Out (FIFO) data structure

  private queue: unknown[];
  private head: number;
  private tail: number;
  public maxSize: number;

  constructor() {
    this.queue = [];
    // the front of the queue is the head
    this.head = 0;
    // the back of the queue is the tail
    this.tail = 0;
    // define a maximum size of the queue
    this.maxSize = 100;
  }

  // add an item to the queue (to the end of the queue (the tail))
  enqueue(item: unknown) {
    // when we add an item
    if (this.isFull()) {
      return false;
    }

    // add the item to the tail
    this.queue[this.tail] = item;
    // increment the tail
    this.tail += 1;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    }

    const item = this.queue[this.head];
    // (!) note:
    // reducing the array size (and therefore removing the item from the queue) is implementation specific eg.
    // this.queue.length = this.queue.length - 1;
    // but this affects the head and the tail pointers
    this.head += 1;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.head];
  }

  getLength(): number {
    // calculate the length by subtracting the head from the tail
    return this.tail - this.head;
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }

  isEmpty() {
    return this.getLength() === 0;
  }
}

// const queue = new Queue();

// console.log(queue);
// // Queue { queue: [], head: 0, tail: 0, maxSize: 100 }

// console.log(queue.getLength());
// // 0

// queue.enqueue("a");
// queue.enqueue("b");
// queue.enqueue("c");
// console.log(queue);
// // Queue { queue: [ 'a', 'b', 'c' ], head: 0, tail: 3, maxSize: 100 }

// queue.dequeue();
// console.log(queue);
// // Queue { queue: [ 'a', 'b', 'c' ], head: 1, tail: 3, maxSize: 100 }
// console.log(queue.peek());
// // b

// queue.dequeue();
// console.log(queue);
// // Queue { queue: [ 'a', 'b', 'c' ], head: 2, tail: 3, maxSize: 100 }
// console.log(queue.peek());
// // c
