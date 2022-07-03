/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time Complexity: O(n log n), due to sorting
 * Space Complexity: O(n), creating a new linked list
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  // add all the node values to our array
  let resultArr = [];
  for (let list of lists) {
    let curNode = list;
    while (curNode !== null) {
      resultArr.push(curNode.val);
      curNode = curNode.next;
    }
  }

  // sort the array in increasing order
  resultArr.sort((a, b) => a - b);

  // generate a new linked list
  // create a dummy node
  let resultList = new ListNode(0);

  // loop through each values in the array
  // and create new nodes along the way
  let curNode = resultList;
  for (let val of resultArr) {
    curNode.next = new ListNode(val);
    curNode = curNode.next;
  }

  // return list.next to eliminate dummy node
  return resultList.next;
};
