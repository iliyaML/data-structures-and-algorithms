function TrieNode(char) {
  this.children = new Map();
  this.isCompleteWord = false;
}

function Trie() {
  this.root = new TrieNode();
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let level = this.root;
  for (let i = 0, l = word.length; i < l; ++i) {
    let char = word.charAt(i);
    if (level.children.has(char) === false) {
      level.children.set(char, new TrieNode());
    }

    level = level.children.get(char);
  }

  level.isCompleteWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let level = this.root;

  for (let i = 0, l = word.length; i < l; ++i) {
    let char = word.charAt(i);

    if (level.children.has(char) === false) {
      return false;
    }

    level = level.children.get(char);
  }

  return level.isCompleteWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let level = this.root;

  for (let i = 0, l = prefix.length; i < l; ++i) {
    let char = prefix.charAt(i);

    if (level.children.has(char) === false) {
      return false;
    }

    level = level.children.get(char);
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
