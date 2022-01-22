const largestComponent = (graph) => {
  let size = 0;
  let visited = new Set();

  for (let node in graph) {
    let countSize = 0;
    if (visited.has(node) === false) {
      node = String(node);
      const stack = [node];
      while (stack.length > 0) {
        let curNode = stack.pop();
        if (visited.has(curNode) === false) {
          visited.add(curNode);
          countSize += 1;
          for (let adjacentNode of graph[curNode]) {
            stack.push(String(adjacentNode));
          }
        }
      }
    }

    if (countSize > size) {
      size = countSize;
    }
  }

  return size;
};
