let files = [
  "/app/backend/src/code.js",
  "/app/backend/src/script.js",
  "/app/backend/db/db.js",
  "/app/frontend/index.html",
];

const generateFolderStructure = (files) => {
  let myMap = new Map();

  for (let file of files) {
    let folders = file.substring(1).split("/");
    let node = myMap;

    for (let folder of folders) {
      if (!node.has(folder)) {
        node.set(folder, new Map());
      }
      node = node.get(folder);
    }
  }

  _dfs(myMap, "");
};

const _dfs = (node, space = "") => {
  if (node.size === 0) {
    return;
  }

  for (let [key, val] of node) {
    console.log(space + " -- " + key);
    _dfs(val, space + "  ");
  }
};

generateFolderStructure(files);
