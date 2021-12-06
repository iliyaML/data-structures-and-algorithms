/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Use two pointers (fast and slow runner)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  // initialize two pointers to the head
  let fastRunner = head;
  let slowRunner = head;

  // loop through the list using fast runner
  while (fastRunner !== null && fastRunner.next !== null) {
    // move the slow runner once
    slowRunner = slowRunner.next;

    // move the fast runner twice
    fastRunner = fastRunner.next.next;
  }

  // return the slow runner as it should be in the middle
  return slowRunner;
};
