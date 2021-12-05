class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// FIFO
class QueueList {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      // assign last node's next to new node
      this.back.next = newNode;
      // move the back pointer to point the the new node
      this.back = newNode;
    }
    ++this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }

    const removedNode = this.front;
    if (this.size === 1) {
      this.back = null;
    }
    // move the front pointer to the next node
    this.front = this.front.next;

    --this.size;
    return removedNode.val;
  }

  peek() {
    if (this.size === 0) {
      return null;
    }
    return this.front.val;
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }
}

let queue = new QueueList();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.dequeue());
