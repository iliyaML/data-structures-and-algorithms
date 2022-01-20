const generateGraph = (edges) => {
  let graph = new Map();
  for (let i = 0, l = edges.length; i < l; ++i) {
    let [src, dst] = edges[i];

    if (graph.has(src) === false) {
      graph.set(src, new Set());
    }
    if (graph.has(dst) === false) {
      graph.set(dst, new Set());
    }

    graph.get(src).add(dst);
    graph.get(dst).add(src);
  }
  return graph;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = generateGraph(edges);

  const visited = new Set();
  const stack = [nodeA];

  while (stack.length > 0) {
    let curNode = stack.pop();
    console.log(curNode);
    if (visited.has(curNode) === false) {
      if (curNode === nodeB) {
        return true;
      }
      visited.add(curNode);
      for (let adjacentNode of graph.get(curNode)) {
        stack.push(adjacentNode);
      }
    }
  }

  return false;
};
