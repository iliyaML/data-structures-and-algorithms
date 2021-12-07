/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Use two pointers (fastrunner and slowrunner)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  // initialize the two runners to head
  let fastRunner = head;
  let slowRunner = head;

  // loop fastrunner to the end of the list
  while (fastRunner !== null && fastRunner.next !== null) {
    // move the slowrunner once
    slowRunner = slowRunner.next;

    // move the fastrunner twice
    fastRunner = fastRunner.next.next;

    // important to do post check as opposed to pre check
    if (fastRunner === slowRunner) {
      return true;
    }
  }
  // if the loop ends, it means there is no cycle
  return false;
};
