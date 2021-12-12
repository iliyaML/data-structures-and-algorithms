/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Take advantage of the fact the list contains unique values only
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node) => {
  // copy the next node's value
  node.val = node.next.val;

  // reassign node's next to the next node's next
  node.next = node.next.next;

  // which means the next node becomes untangled from the list
};
