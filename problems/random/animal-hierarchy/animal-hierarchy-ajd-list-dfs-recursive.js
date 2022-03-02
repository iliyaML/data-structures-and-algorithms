const animalHierarchy = (listOfPairs) => {
  // key: parent
  // val: list of children
  const adjList = new Map();

  // set to store all the children
  // used to determine the root node
  const childrenSet = new Set();

  // generate the adjacency list
  for (let [parent, child] of listOfPairs) {
    if (adjList.has(parent)) {
      adjList.get(parent).add(child);
    } else {
      adjList.set(parent, new Set([child]));
    }

    // populate the children set
    childrenSet.add(child);
  }

  // determine the root node
  let root = "";

  for (let [parent, child] of listOfPairs) {
    if (!childrenSet.has(parent)) {
      root = parent;
    }
  }

  // call dfs on our root node
  _dfs(adjList, root);
};

const _dfs = (adjList, root, space = "") => {
  // standard base case, if adjacency list is empty
  // do nothing
  if (adjList.size === 0) {
    return;
  }

  // if root is not a key in our adjacency list
  // simply print out the values
  if (!adjList.has(root)) {
    console.log(space + root);
    return;
  }

  // pre-order traversal
  console.log(space + root);

  // go through all the children of root
  // recursively call dfs
  for (let child of adjList.get(root)) {
    _dfs(adjList, child, space + "  ");
  }
};

animalHierarchy([
  ["animal", "mammal"],
  ["animal", "bird"],
  ["lifeform", "animal"],
  ["cat", "lion"],
  ["mammal", "cat"],
  ["animal", "fish"],
]);
