/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(log n)
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums, startIndex = 0, endIndex = nums.length - 1) => {
  // base case to stop recursion
  if (startIndex > endIndex) {
    return null;
  }

  // calculate middle index
  const midIndex = Math.floor((startIndex + endIndex) / 2);

  // create a new node and store the middle index value
  const rootNode = new TreeNode(nums[midIndex]);

  // do this recursively
  rootNode.left = sortedArrayToBST(nums, startIndex, midIndex - 1);
  rootNode.right = sortedArrayToBST(nums, midIndex + 1, endIndex);

  // return the first node which is the root
  return rootNode;
};
