const generateGraph = (edges) => {
  const graph = new Map();

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

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = generateGraph(edges);
  console.log(graph);
  const queue = [[nodeA, 0]];

  let found = false;
  const visited = new Set();
  let distance = 0;

  while (queue.length > 0) {
    let [curNode, distFromSrc] = queue.shift();

    if (visited.has(curNode) === false) {
      if (curNode === nodeB) {
        found = true;
        distance = distFromSrc;
        break;
      }
      visited.add(curNode);
      ++distFromSrc;

      for (let adjacentNode of graph.get(curNode)) {
        queue.push([adjacentNode, distFromSrc]);
      }
    }
  }

  if (found === true) {
    return distance;
  } else {
    return -1;
  }
};

// const edges = [
//   ['w', 'x'],
//   ['x', 'y'],
//   ['z', 'y'],
//   ['z', 'v'],
//   ['w', 'v']
// ];

// console.log(shortestPath(edges, 'w', 'z'));
