/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Use two pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  // edge case
  if (head === null || head.next === null) {
    return head;
  }

  // at this point, we know head and head.next is not null

  // set the initial value for the two pointers
  let curNode = head.next;
  let prevNode = head;

  // loop through all the nodes
  while (curNode !== null) {
    if (curNode.val === prevNode.val) {
      // if the current node's value and the previous node's value are the same
      // we remove curNode from the list
      prevNode.next = curNode.next;
    } else {
      // if the current node's value and the previous node's value are different
      // change the prevNode pointer to curNode
      prevNode = curNode;
    }

    // move the curNode to the next node
    curNode = curNode.next;
  }

  return head;
};
