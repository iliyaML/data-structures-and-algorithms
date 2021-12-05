class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// LIFO
// Using linked list as the underlying data structure
class StackList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new StackNode(val);
    if (this.size === 0) {
      this.top = newNode;
    } else {
      // assign new node's next value to top
      newNode.next = this.top;

      // change top to point to the new node
      this.top = newNode;
    }
    ++this.size;
  }

  pop() {
    const removedNode = this.top;
    if (this.size === 0) {
      return null;
    }
    // move the top pointer to top's next
    this.top = this.top.next;
    --this.size;
    return removedNode.val;
  }

  peek() {
    return this.top.val;
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }
}
