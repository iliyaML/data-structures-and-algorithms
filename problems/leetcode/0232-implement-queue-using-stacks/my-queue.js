/**
 * Initialize your data structure here.
 */

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(element) {
    this.stack1.push(element);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
