/**
 *
 * @param {*} graph
 * @returns
 */
const connectedComponentsCount = (graph) => {
  let count = 0;
  let visited = new Set();

  for (let node in graph) {
    if (visited.has(node) === false) {
      node = String(node);
      const stack = [node];
      while (stack.length > 0) {
        let curNode = stack.pop();
        if (visited.has(curNode) === false) {
          visited.add(curNode);
          for (let adjacentNode of graph[curNode]) {
            stack.push(String(adjacentNode));
          }
        }
      }

      ++count;
    }
  }

  return count;
};
