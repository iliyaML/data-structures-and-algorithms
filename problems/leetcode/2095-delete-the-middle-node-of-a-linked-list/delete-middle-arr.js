/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Use an array to store the nodes in the list
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = (head) => {
  // array to store nodes
  const arr = [];

  let curNode = head;

  // populate the array
  while (curNode !== null) {
    arr.push(curNode);
    curNode = curNode.next;
  }

  const totalNodes = arr.length;
  const midIndex = Math.floor(totalNodes / 2);

  if (totalNodes === 1) {
    // edge case: if we only have one node, we assign head to null and return
    head = null;
    return head;
  } else {
    // use the index to get the nodes in the middle and before the middle
    let nodeBeforeMid = arr[midIndex - 1];
    let nodeMid = arr[midIndex];

    nodeBeforeMid.next = nodeMid.next;
  }

  return head;
};
