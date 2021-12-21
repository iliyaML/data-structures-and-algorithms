const dfsIterative = (graph, startNode) => {
  const result = [];
  if (graph === null) {
    return result;
  }

  const visited = new Set();
  const stack = [startNode];
  visited.add(startNode);

  while (stack.length > 0) {
    let curNode = stack.pop();
    result.push(curNode);
    for (let adjacentNode of graph[curNode]) {
      if (visited.has(adjacentNode) === false) {
        stack.push(adjacentNode);
        visited.add(adjacentNode);
      }
    }
  }

  return result;
};

// adjacency list
const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(dfsIterative(graph, "f"));
