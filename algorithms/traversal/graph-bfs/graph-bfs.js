const bfsIterative = (graph, startNode) => {
  const result = [];
  if (graph === null) {
    return result;
  }

  const visited = new Set();
  const queue = [startNode];
  visited.add(startNode);

  while (queue.length > 0) {
    let curNode = queue.shift();
    result.push(curNode);
    for (let adjacentNode of graph[curNode]) {
      if (visited.has(adjacentNode) === false) {
        queue.push(adjacentNode);
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

console.log(bfsIterative(graph, "f"));
