/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  let list1 = headA;
  let list2 = headB;
  // continue to loop until list1 is equal to list2
  // in that case, they are pointing to the same node
  // or both pointing to null
  while (list1 !== list2) {
    // once we've reached the end of list1, we assign the pointer to headB
    list1 = list1 ? list1.next : headB;

    // do the same for list2
    list2 = list2 ? list2.next : headA;
  }

  // at this point, list1 could be pointing to the same node as list2
  // or both could be pointing to null
  return list1;
};
