/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Use an array to store the list
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  // use an array to store the list
  const arr = [];
  let curNode = head;

  // loop through the list
  while (curNode !== null) {
    // push the node to the list
    arr.push(curNode);
    curNode = curNode.next;
  }
  // array has been populated with all the list nodes

  let middleNode = arr[Math.floor(arr.length / 2)];

  return middleNode;
};
