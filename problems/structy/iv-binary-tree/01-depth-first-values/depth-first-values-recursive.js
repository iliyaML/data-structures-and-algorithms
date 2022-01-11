// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root, arr = []) => {
  if (root === null) {
    return [];
  }

  arr.push(root.val);

  if (root.left !== null) {
    depthFirstValues(root.left, arr);
  }

  if (root.right !== null) {
    depthFirstValues(root.right, arr);
  }

  return arr;
};
