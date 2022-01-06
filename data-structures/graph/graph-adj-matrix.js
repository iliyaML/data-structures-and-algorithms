// from index you get the node
const vertices = ["A", "B", "C", "D", "E"];

// from node you get the index
const vertexIndex = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

// adjacency matrix of an undirected graph
// notice it is symmetrical around the diagonal
// each row/col corresponds to a node
const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

const findAdjacencies = (node) => {
  // array to store the adjacent nodes to the one passed in
  const result = [];

  const nodeIndex = vertexIndex[node];
  // get the row of the adjacencymatrix associated with the node index
  const nodeRow = adjacencyMatrix[nodeIndex];

  // loop through all elements/nodes in the row
  for (let i = 0, l = nodeRow.length; i < l; ++i) {
    if (nodeRow[i] === 1) {
      // if it is equal to 1, it is an adjacent node, so we push it to our result
      result.push(vertices[i]);
    }
  }

  // return the result
  return result;
};

const isConnected = (srcNode, dstNode) => {
  const srcNodeIndex = vertexIndex[srcNode];
  const dstNodeIndex = vertexIndex[dstNode];
  return !!adjacencyMatrix[srcNodeIndex][dstNodeIndex];
};

console.log(findAdjacencies("A")); // ['B', 'D']
console.log(findAdjacencies("C")); // ['B', 'D']

console.log(isConnected("A", "B")); // true
console.log(isConnected("A", "C")); // false
