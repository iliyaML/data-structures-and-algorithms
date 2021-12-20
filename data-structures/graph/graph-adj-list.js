class GraphNode {
  constructor(val) {
    // to store this node's value
    this.val = val;
    this.adjacents = new Set(); // adjacency list
  }

  addAdjacent(node) {
    // ensure we add a valid node
    if (node !== null) {
      this.adjacents.add(node);
    }
  }

  removeAdjacent(node) {
    if (node !== null && this.adjacents.has(node)) {
      this.adjacents.delete(node);
      return node;
    }
  }

  getAdjacents() {
    return this.adjacents; // return the set
  }

  isAdjacent(node) {
    return this.adjacents.has(node);
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }

  addEdge(srcVal, dstVal) {
    // add the source and destination nodes to our graph
    const srcNode = this.addVertex(srcVal);
    const dstNode = this.addVertex(dstVal);

    srcNode.addAdjacent(dstNode);

    if (this.edgeDirection === Graph.UNDIRECTED) {
      dstNode.addAdjacent(srcNode);
    }

    return [srcNode, dstNode];
  }

  addVertex(val) {
    if (this.nodes.has(val)) {
      return this.nodes.get(val);
    } else {
      const vertex = new GraphNode(val);
      this.nodes.set(val, vertex);
      return vertex;
    }
  }

  removeVertex(value) {
    const curNode = this.nodes.get(value);
    if (curNode) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(curNode);
      }
    }
    return this.nodes.delete(value);
  }

  removeEdge(srcVal, dstVal) {
    const srcNode = this.nodes.get(srcVal);
    const dstNode = this.nodes.get(dstVal);

    if (srcNode && dstNode) {
      srcNode.removeAdjacent(dstNode);

      if (this.edgeDirection === Graph.UNDIRECTED) {
        dstNode.removeAdjacent(srcNode);
      }
    }

    return [srcNode, dstNode];
  }

  // use a Queue data structure (FIFO)
  bfs(firstNode) {
    // ensure given first node is valid
    if (firstNode === null) {
      return;
    }

    const visited = new Set();
    const queue = [firstNode];

    while (queue.length > 0) {
      const node = queue.shift();
      if (node && !visited.has(node)) {
        console.log(node.val);
        visited.add(node);
        for (let adjacentNode of node.getAdjacents()) {
          stack.push(adjacentNode);
        }
      }
    }
  }

  // use a Stack data structure (LIFO)
  dfs(firstNode) {
    // ensure given first node is valid
    if (firstNode === null) {
      return;
    }

    const visited = new Set();
    const stack = [firstNode];

    while (stack.length > 0) {
      const node = stack.pop();
      if (node && !visited.has(node)) {
        console.log(node.val);
        visited.add(node);
        for (let adjacentNode of node.getAdjacents()) {
          stack.push(adjacentNode);
        }
      }
    }
  }
}

Graph.UNDIRECTED = Symbol("directed graph"); // two-ways edges
Graph.DIRECTED = Symbol("undirected graph"); // one-way edges

const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

graph.dfs(first);
