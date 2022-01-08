// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
  let sum = 0;
  let curNode = head;

  while (curNode !== null) {
    sum += curNode.val;
    curNode = curNode.next;
  }

  return sum;
};
