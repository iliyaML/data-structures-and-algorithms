// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
  let curNode = head;
  let counter = 0;
  while (curNode !== null) {
    if (counter === index) {
      return curNode.val;
    }
    curNode = curNode.next;
    ++counter;
  }

  return null;
};
