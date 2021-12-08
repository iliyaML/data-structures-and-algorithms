/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Use two pointers (prev and cur)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let curNode = head;
  let prevNode = null;

  // loop until the last node
  while (curNode !== null) {
    // store current node's next value for swapping later
    let tmp = curNode.next;
    curNode.next = prevNode;

    // update prevNode before curNode
    prevNode = curNode;
    curNode = tmp;
  }

  // at this stage, curNode is null
  // so we return prevNode which is the last node in the list
  return prevNode;
};
