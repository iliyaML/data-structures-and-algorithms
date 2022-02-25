/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  // set to store the nodes
  let mySet = new Set();

  // iterate through the first list and populate the set
  let list1 = headA;
  while (list1 !== null) {
    mySet.add(list1);
    list1 = list1.next;
  }

  // iterate through the second list and check with the set
  let list2 = headB;
  while (list2 !== null) {
    // if the set contains a node from list2
    // immediately return the node
    if (mySet.has(list2)) {
      return list2;
    }
    list2 = list2.next;
  }

  // otherwise, if we reach here
  // there is no intersection between the two lists
  return null;
};
