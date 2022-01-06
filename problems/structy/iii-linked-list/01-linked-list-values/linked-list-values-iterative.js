// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  const arr = [];
  let curNode = head;

  while (curNode !== null) {
    arr.push(curNode.val);
    curNode = curNode.next;
  }

  return arr;
};
