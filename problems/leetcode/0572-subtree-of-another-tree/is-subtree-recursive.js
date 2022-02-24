/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time Complexity: O(s*t)
 * Space Complexity: O()
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  // order of base case matters!
  if (subRoot === null) {
    return true;
  }

  if (root === null) {
    return false;
  }

  if (_isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const _isSameTree = (s, t) => {
  if (s === null && t === null) {
    return true;
  }

  if (s !== null && t !== null && s.val === t.val) {
    return _isSameTree(s.left, t.left) && _isSameTree(s.right, t.right);
  }

  return false;
};
