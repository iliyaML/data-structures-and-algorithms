/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n), recursive call stack
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  let newNode = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return newNode;
};
