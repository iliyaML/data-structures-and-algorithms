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
 * @return {ListNode}
 */
const deleteMiddle = (head) => {
  // edge case, if we only have one node
  if (head.next === null) {
    head = null;
    return head;
  }

  // declare our two pointers
  let fastRunner = head.next.next;
  let slowRunner = head;

  while (fastRunner !== null && fastRunner.next !== null) {
    // move both runners
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }
  // at this point, slowRunner would be the middle node
  slowRunner.next = slowRunner.next.next;

  return head;
};
