// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }

  let prevNode = null;
  let curNode = head;

  while (curNode !== null) {
    let tmp = curNode.next;
    curNode.next = prevNode;

    prevNode = curNode;
    curNode = tmp;
  }

  return prevNode;
};
