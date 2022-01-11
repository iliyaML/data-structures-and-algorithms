const depthFirstValues = (root) => {
  if (root === null) {
    return [];
  }

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};
