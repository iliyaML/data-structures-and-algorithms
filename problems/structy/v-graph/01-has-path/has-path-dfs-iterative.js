/**
 * Time Complexity:
 * Space Complexity:
 * @param {*} graph
 * @param {*} src
 * @param {*} dst
 * @returns
 */
const hasPath = (graph, src, dst) => {
  const stack = [src];

  while (stack.length > 0) {
    let curNode = stack.pop();

    if (curNode === dst) {
      return true;
    }

    for (let node of graph[curNode]) {
      stack.push(node);
    }
  }

  return false;
};
