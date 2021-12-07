/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Use a set to store the nodes
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  const mySet = new Set();
  let curNode = head;

  while (curNode !== null) {
    if (mySet.has(curNode)) {
      return true;
    }

    mySet.add(curNode);

    curNode = curNode.next;
  }

  return false;
};
