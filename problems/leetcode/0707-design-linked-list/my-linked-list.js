function MyLinkedListNode(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;

  // actually optional, nice to have
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // check if index is valid
  if (index < 0 || index >= this.size) {
    return -1;
  }

  let curNode = this.head;
  let pos = 0;

  // traverse and increment pos
  while (pos < index) {
    ++pos;
    curNode = curNode.next;
  }

  // at this point, pos === index, so return the curNode's val
  return curNode.val;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  // leverage addAtIndex method
  this.addAtIndex(0, val);
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  // leverage addAtIndex method
  this.addAtIndex(this.size, val);
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // check if index is valid
  if (index < 0 || index > this.size) {
    return;
  }

  // create the new node
  let newNode = new MyLinkedListNode(val);

  if (index === 0) {
    // edge case, insert a new node at the head
    newNode.next = this.head;
    this.head = newNode;
  } else {
    let curNode = this.head;
    let pos = 0;

    // traverse through one position before the index
    while (pos < index - 1) {
      ++pos;
      curNode = curNode.next;
    }

    // at this point, curNode is before the index we want to insert
    newNode.next = curNode.next;
    curNode.next = newNode;
  }

  // don't forget to increment size
  ++this.size;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  // check if index is valid
  if (index < 0 || index >= this.size) {
    return;
  }

  if (index === 0) {
    // edge case, if you want to delete the first node
    // move the head ptr
    this.head = this.head.next;
  } else {
    let pos = 0;
    let curNode = this.head;

    // traverse to 1 position before the index
    while (pos < index - 1) {
      ++pos;
      curNode = curNode.next;
    }

    // at this point, curNode is before the node we're interested in deleting
    curNode.next = curNode.next.next;
  }

  // don't forget to decrement size
  --this.size;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
