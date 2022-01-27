/**
 * Initialize your data structure here.
 */

class TrieNode {
  constructor() {
    this.isEnd = false;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let i = 0, l = word.length; i < l; ++i) {
      const char = word.charAt(i);
      if (!node.children.get(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEnd = true;
  }

  searchPrefix(word) {
    let node = this.root;
    for (let i = 0, l = word.length; i < l; ++i) {
      const char = word.charAt(i);
      if (node.children.get(char)) {
        node = node.children.get(char);
      } else {
        return null;
      }
    }
    return node;
  }

  search(word) {
    let node = this.searchPrefix(word);
    return node !== null && node.isEnd;
  }

  startsWith(word) {
    return this.searchPrefix(word) !== null;
  }
}
