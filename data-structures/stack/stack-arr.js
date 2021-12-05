// LIFO
// Using arrays as the underlying data structure
class StackArr {
  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.push(val);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.size() - 1];
  }

  size() {
    return this.storage.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}
