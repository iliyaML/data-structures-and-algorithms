/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * m = # of nodes in l1
 * n = # of nodes in l2
 * Time Complexity: O(max(m, n)), m = l1, n = l2
 * Space Complexity: O(max(m, n))
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  // pointers for list 1 and 2
  let cur1Ptr = l1;
  let cur2Ptr = l2;

  // initialize our new sum list
  let sumList = new ListNode(0);
  let sumPtr = sumList;

  // keep track of the carry over per loop iteration
  let carryOver = 0;

  while (cur1Ptr !== null || cur2Ptr !== null) {
    let sum = carryOver;

    if (cur1Ptr !== null) {
      sum += cur1Ptr.val;

      cur1Ptr = cur1Ptr.next; // move the pointer
    }
    if (cur2Ptr !== null) {
      sum += cur2Ptr.val;

      cur2Ptr = cur2Ptr.next; // move the pointer
    }

    // at this point, sum's value is cur1 + cur2 + carryOver

    // update the carryOver for the next iteration
    carryOver = sum > 9 ? 1 : 0;

    // add a new node with the value of the remainder
    sumPtr.next = new ListNode(sum % 10);
    sumPtr = sumPtr.next;
  }

  // if there is a carry over at the end, add a new node
  if (carryOver === 1) {
    sumPtr.next = new ListNode(carryOver);
  }

  // remove the dummy node at the head by moving the pointer to the next node
  return sumList.next;
};
