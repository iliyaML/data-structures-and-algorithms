/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  // if head is empty or k is zero
  // do nothing
  if (head === null || k === 0) {
    return head;
  }

  let lPtr = head;
  let listLength = 1;

  // iterate until lPtr is the last node in the list
  // at the same time, increment our counter to figure out the length
  // of the list
  while (lPtr.next !== null) {
    ++listLength;
    lPtr = lPtr.next;
  }

  // at this point, lPtr points to the last node in the list

  // since k is unbounded, we do the following to avoid numerous
  // similar rotation
  k = k % listLength;

  // iterate through the node before
  let curNode = head;
  let i = 0;

  while (curNode !== null && i < listLength - k - 1) {
    ++i;
    curNode = curNode.next;
  }

  // curNode now points to the new last node

  let newHead = curNode.next;
  curNode.next = null;
  lPtr.next = head;

  return newHead;
};
