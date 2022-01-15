/**
 * Time Complexity:
 * Space Complexity:
 * @param {*} graph
 * @param {*} src
 * @param {*} dst
 * @returns
 */
const hasPath = (graph, src, dst) => {
  // base case
  if (src === dst) {
    return true;
  }

  for (let node of graph[src]) {
    if (hasPath(graph, node, dst) === true) {
      return true;
    }
  }

  return false;
};
