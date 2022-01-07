const dfsRecursive = (graph, startNode, result = [], visited = new Set()) => {
  if (graph === null) {
    return result;
  }

  result.push(startNode);
  visited.add(startNode);

  for (let adjacentNode of graph[startNode]) {
    if (visited.has(adjacentNode) === false) {
      visited.add(adjacentNode);
      dfsRecursive(graph, adjacentNode, result, visited);
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

console.log(dfsRecursive(graph, "f"));
