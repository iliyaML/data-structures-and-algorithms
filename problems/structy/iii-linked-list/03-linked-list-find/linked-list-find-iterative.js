// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  let curNode = head;
  while (curNode !== null) {
    if (curNode.val === target) {
      return true;
    }
    curNode = curNode.next;
  }

  return false;
};
