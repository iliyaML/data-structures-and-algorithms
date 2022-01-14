/**
 * Time Complexity:
 * Space Complexity:
 * @param {*} graph
 * @param {*} src
 * @param {*} dst
 * @returns
 */
const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    let curNode = queue.shift();

    if (curNode === dst) {
      return true;
    }

    for (let node of graph[curNode]) {
      queue.push(node);
    }
  }

  return false;
};
